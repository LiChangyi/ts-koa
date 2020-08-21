import { Context } from 'koa';

import { addPayload } from './paramsValidate';
import { RESPONSE_CODE_MAP } from '../../common/const';

const add: IRouteConfig = {
  method: 'post',
  path: '/',
  validate: {
    payload: addPayload,
  },
  handle: async (ctx: Context) => {
    const { username, password, nickname } = ctx.request.body;

    try {
      // 查看 username 是否重复
      const exist = await ctx.models.user.findOne({ username });
      if (exist) {
        ctx.error(RESPONSE_CODE_MAP.USERNAME_EXIST);
        return;
      }

      // 写库
      await ctx.models.user.create({
        username,
        password,
        nickname,
      });
      ctx.success({
        message: '注册成功',
      });
    } catch (err) {
      ctx.throw(err);
    }
  },
};

export default add;
