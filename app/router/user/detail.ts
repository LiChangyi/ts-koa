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
