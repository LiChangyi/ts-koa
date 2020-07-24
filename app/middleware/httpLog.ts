/*
 * @Author: licy
 * @Date: 2020-07-18 23:10:39
 * @LastEditTime: 2020-07-24 20:36:43
 * @Description: 统计接收到的请求信息
 */

import { Context } from 'koa';
import { NO_LOG_INTERFACE_LIST } from '../common/const';

export default async (ctx: Context, next: any) => {
  const startAt = Date.now();
  await next();
  const endAt = Date.now();

  let bodyStr = JSON.stringify(ctx.request.body);
  const find = NO_LOG_INTERFACE_LIST.find(
    ([m, u]) => m.toLocaleUpperCase() === ctx.method && u === ctx.url,
  );
  if (find) {
    bodyStr = '为了安全，此接口不打印请求体数据';
  }
  ctx.logger.info(
    `${ctx.method} ${ctx.url} ${bodyStr} ${
      ctx.status
    } ${endAt - startAt}ms`,
  );
};
