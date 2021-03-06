import { Context } from 'koa';
import { ObjectSchema } from 'joi';

declare global {
  interface ILogger {
    info: (text: string) => void;
    error: (error: any) => void;
  }

  type TRole = 'admin' | 'manager' | 'user';
  type TCtxUser = {
    uid: string;
    role: TRole;
  }

  interface IRouteConfig {
    path: string;
    method?: string;
    validate?: {
      auth?: TRole[];
      payload?: ObjectSchema;
      query?: ObjectSchema;
    };
    handle: (ctx: Context) => void;
  }
}
