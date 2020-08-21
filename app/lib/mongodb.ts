import mongoose from 'mongoose';

import config from '../../config';
import logger from '../utils/logger';

export default () => {
  mongoose.connect(config.mongodb.url, {
    authSource: config.mongodb.authSource,
    user: config.mongodb.user,
    pass: config.mongodb.password,
    useNewUrlParser: true,
  });
  const { connection } = mongoose;
  connection.on('connected', () => {
    logger.info('连接 mongodb 成功');
  });
  connection.on('error', (err) => {
    logger.error('与 mongodb 连接出现错误');
    logger.error(err);
  });
  connection.on('disconnected', () => {
    logger.error('与 mongodb 连接断开');
  });
  connection.on('reconnected', () => {
    logger.info('重连mongodb成功');
  });
};
