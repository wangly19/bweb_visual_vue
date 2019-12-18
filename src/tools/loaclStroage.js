// 本地存储封装

/**
 * 获取存储节点
 * @param {string} where
 */
const getLocalStroage = (where) => localStorage.getItem(where)

/**
 * 设置存储值
 * @param {string} key
 * @param {any} value
 */
const setLocalStroage = (key, value) => localStorage.setItem(key, value)

/**
 * 移除节点值
 * @param {string} where
 */
const removeLocalStroage = (where) => localStorage.removeItem(where)

export {
  getLocalStroage,
  setLocalStroage,
  removeLocalStroage
}
