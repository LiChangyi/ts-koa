/*
 * @Author: licy
 * @Date: 2020-07-18 22:54:24
 * @LastEditTime: 2020-07-19 22:40:13
 * @Description: 中间件的基础处理，根据洋葱模型，函数的加载顺序会影响整个流程
 */

import { TypeApp } from 'koa';
import koaBody from 'koa-body';

import httpLog from './httpLog';
import response from './response';

export default (app: TypeApp) => {
  app.use(
    koaBody({
      formLimit: '10mb',
      jsonLimit: '10mb',
      textLimit: '10mb',
    }),
  );
  app.use(httpLog);
  app.use(response);
};
