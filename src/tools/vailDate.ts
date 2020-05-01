/**
 * 前端基础数据校验
 */

/**
 * 是URL地址?
 * @param url 网址
 * @return 布尔值
 */
export function isUrl(url: string): boolean {
  return /^http[s]?:\/\/.*/.test(url)
}

/**
 * 是手机号码?
 * @param mobileNumber 手机号码
 * @return 布尔值
 */
export function isMobile(mobileString: string): boolean {
  return /^1[0-9]{10}$/.test(mobileString)
}

/**
 * 是邮箱？
 * @param email 邮箱地址
 * @return 布尔值
 */
export function isEmail(email: string): boolean {
  return /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)
}
