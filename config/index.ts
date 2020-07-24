const config: IConfig = {
  port: 3000,
  log4Path: './logs',
  mongodb: {
    url: 'mongodb://127.0.0.1:27017/demo',
    user: '',
    password: '',
    authSource: 'admin',
  },
  redis: {
    host: '127.0.0.1',
    password: '',
  },
};

export default config;
