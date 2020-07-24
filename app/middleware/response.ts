/*
 * @Author: licy
 * @Date: 2020-07-19 00:07:58
 * @LastEditTime: 2020-07-24 20:41:29
 * @Description: 消息体拦截中间件
 */

import { Context } from 'koa';
import response from '../utils/response';
import { RESPONSE_CODE_MAP } from '../common/const';

export default async (ctx: Context, next: Function) => {
  // 植入 success 和 error 2个方法
  ctx.success = response.success.bind(null, ctx);
  ctx.error = response.error.bind(null, ctx);
  try {
    await next();
    if ([404, 405].includes(ctx.status)) {
      ctx.error([ctx.status, ctx.message]);
    }
  } catch (err) {
    ctx.error(RESPONSE_CODE_MAP.SERVER_INNER_ERROR);
    // 主动捕获代码中的错误，然后打印
    ctx.logger.error(err);
  }
};
