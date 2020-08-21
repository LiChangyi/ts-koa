import joi from 'joi';

const username = joi.string()
  .min(4)
  .max(12)
  .required()
  .description('用户名');

const password = joi.string()
  .min(6)
  .max(12)
  .required()
  .description('密码');

const nickname = joi.string()
  .min(2)
  .max(12)
  .required()
  .description('用户昵称');

export const addPayload = joi.object({
  username,
  password,
  nickname,
});

export const tokenPayload = joi.object({
  username,
  password,
});
export default {};
