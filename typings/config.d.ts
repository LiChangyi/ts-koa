interface IConfig {
  port: number;
  log4Path: string;
  mongodb: {
    url: string;
    user: string;
    password: string;
    authSource: string;
  },
  redis: {
    host: string;
    password: string;
  }
}
