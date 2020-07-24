/*
 * @Author: licy
 * @Date: 2020-07-19 20:17:04
 * @LastEditTime: 2020-07-24 17:33:53
 * @Description: User collection 定义
 */

import { Schema, model } from 'mongoose';
import { md5 } from '../common/func';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
}, {
  versionKey: false,
});

userSchema.pre('validate', function (this: IUserDocument, next: Function) {
  // 密码进行 加密
  this.password = md5(this.password);
  next();
});

export default model<IUserDocument>('user', userSchema);
