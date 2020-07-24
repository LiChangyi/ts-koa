/*
 * @Author: licy
 * @Date: 2020-07-19 14:29:23
 * @LastEditTime: 2020-07-19 23:45:38
 * @Description: 此文件存放，当前目录接口所需要用的参数解析规则
 */

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
