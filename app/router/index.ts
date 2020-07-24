/*
 * @Author: licy
 * @Date: 2020-07-18 22:09:27
 * @LastEditTime: 2020-07-18 23:02:02
 * @Description: 路由集中控制区
 */

import { TypeApp } from 'koa';

import user from './user';

export default (app: TypeApp) => {
  app.use(user.routes());
};
