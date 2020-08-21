import { TypeApp } from 'koa';

import user from './user';

export default (app: TypeApp) => {
  app.use(user.routes());
};
