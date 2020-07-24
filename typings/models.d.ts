import { Document, Model } from 'mongoose';

declare global {
  interface IUser {
    _id: string;
    username: string;
    nickname: string;
    password: string;
    role?: 'admin' | 'user';
  }
  interface IUserDocument extends Document, IUser {

  }
  type IUserModel = Model<IUserDocument>;
  interface IModels {
    user: IUserModel;
  }
}
