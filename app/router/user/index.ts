/*
 * @Author: licy
 * @Date: 2020-07-18 22:13:15
 * @LastEditTime: 2020-07-24 21:06:11
 * @Description: user router 入口
 */
import KoaRouter from 'koa-router';

import validateMiddleWare from '../../middleware/validate';
import add from './add';
import token from './token';
import detail from './detail';

const router = new KoaRouter({
  prefix: '/api/user',
});

[add, token, detail].forEach(({
  method = 'get', path = '/', validate, handle,
}: IRouteConfig) => {
  router[method.toLocaleLowerCase()](path, validateMiddleWare(validate), handle);
});

export default router;
