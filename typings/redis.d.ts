/*
 * @Author: licy
 * @Date: 2020-07-19 23:37:56
 * @LastEditTime: 2020-07-19 23:50:10
 * @Description:
 */

import redis from 'redis';

declare module 'redis' {
  export interface RedisClient extends NodeJS.EventEmitter {
    setAsync(key:string, value:string, ex: string, time: number): Promise<void>;
    getAsync(key:string): Promise<string>;
  }
}
