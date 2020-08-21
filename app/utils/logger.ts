import log4js from 'log4js';
import path from 'path';
import fs from 'fs';

import config from '../../config';

const logFileDir = path.resolve(config.log4Path);
const infoPath = `${config.log4Path}/info`;
const errPath = `${config.log4Path}/error`;

// 日志保存天数
const daysToKeep = {
  info: 30,
  err: 30,
};

// 判断文件夹是否存在，不存在则创建
const confirmPath = (pathStr: string) => {
  if (!fs.existsSync(pathStr)) {
    fs.mkdirSync(pathStr);
    console.log(`创建logger日志文件夹: ${pathStr}`);
  }
};

const loggerConfig = {
  pm2: true,
  replaceConsole: true,
  appenders: {
    stdout: {
      type: 'stdout',
    },
    info: {
      type: 'dateFile',
      filename: path.resolve(process.cwd(), `${infoPath}/info`),
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      daysToKeep: daysToKeep.info,
    },
    error: {
      type: 'dateFile',
      filename: path.resolve(process.cwd(), `${errPath}/error`),
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      daysToKeep: daysToKeep.err,
    },
  },
  categories: {
    info: { appenders: ['info', 'stdout'], level: 'info' },
    error: { appenders: ['error', 'info', 'stdout'], level: 'error' },
    default: { appenders: ['info', 'error', 'stdout'], level: 'trace' },
  },
};

if (logFileDir) {
  confirmPath(logFileDir);
  confirmPath(infoPath);
  confirmPath(errPath);
}

log4js.configure(loggerConfig);

const infoLogger = log4js.getLogger('info');
const errorLogger = log4js.getLogger('error');

const logger: ILogger = {
  info: (text: string) => {
    if (text) {
      infoLogger.info(text);
    }
  },
  error: (error: any) => {
    if (typeof error === 'string') {
      errorLogger.error(error);
      return;
    }
    if (error) {
      const text = `
      ------------ error log start ------------
      error name   : ${error.name}\n
      error message: ${error.message}\n
      error stack  : ${error.stack}\n
      ------------- error log end -------------
      `;
      errorLogger.error(text);
    }
  },
};

export default logger;
