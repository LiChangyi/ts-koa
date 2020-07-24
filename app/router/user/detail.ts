/*
 * @Author: licy
 * @Date: 2020-07-24 20:41:59
 * @LastEditTime: 2020-07-24 21:08:59
 * @Description: 获取用户个人信息接口
 */

import { Context } from 'koa';

const routerConfig: IRouteConfig = {
  method: 'GET',
  path: '/',
  validate: {
    auth: ['user', 'admin'],
  },
  handle: async (ctx: Context) => {
    try {
      const { uid } = ctx.user;
      const user = await ctx.models.user.findById(uid, {
        password: 0,
      });
      ctx.body = user;
    } catch (err) {
      ctx.throw(err);
    }
  },
};

export default routerConfig;
