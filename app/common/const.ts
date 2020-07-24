/*
 * @Author: licy
 * @Date: 2020-07-19 12:33:47
 * @LastEditTime: 2020-07-24 20:49:02
 * @Description: 一些常量定义
 */

/**
 * 返回数据表对应，
 * [http状态码， 消息文本]
 */
export const RESPONSE_CODE_MAP: Record<string, [number, string]> = {
  USERNAME_EXIST: [400, 'username 已存在!'],
  PASSWORD_ERROR: [400, '账号密码错误'],
  NO_LOGIN: [401, '用户没有登录'],
  NO_AUTH: [403, '没有访问权限'],
  SERVER_INNER_ERROR: [500, '服务内部错误'],
};

// 密码 md5 加密的混淆
export const MD5_SUFFIX = 'm8x69abOLPDGrUt9OvsqvU4g';
// jwt 生成 token 的 secret
export const TOKEN_SUFFIX = 'mS11Y1FdX8Nvw8rlSOQLeNNe';
// token 的过期时间
export const TOKEN_EXPIRES = '30d';
// 密码输入错误的配置信息
export const PWD_ERROR = {
  count: 5,
  // 十分钟
  time: 600,
};
// 日志不打印请求体的安全的
export const NO_LOG_INTERFACE_LIST = [
  ['POST', '/api/user/token'],
];

export default {};
