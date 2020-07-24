/*
 * @Author: licy
 * @Date: 2020-07-18 22:04:13
 * @LastEditTime: 2020-07-24 21:00:18
 * @Description:
 */
import Koa, { Context } from 'koa';
import { RedisClient } from 'redis';

declare module 'koa' {
  interface BaseContext {
    logger: ILogger;
    models: IModels,
    redis: RedisClient,
    user: TCtxUser,
    success: (data) => void;
    error: (response: [number, string]) => void;
  }
  type TypeApp = Koa<Koa.DefaultState, Koa.DefaultContext>;
}
