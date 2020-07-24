/*
 * @Author: licy
 * @Date: 2020-07-18 23:39:44
 * @LastEditTime: 2020-07-19 12:50:14
 * @Description: response 消息体格式封装
 */

import { Context } from 'koa';

export default {
  success(ctx: Context, data) {
    ctx.status = 200;
    ctx.body = data;
  },
  error(ctx: Context, response: [number, string]) {
    const [code, message] = response;
    ctx.status = code;
    ctx.body = {
      code,
      request: `${ctx.method} ${ctx.path}`,
      message,
    };
  },
};
