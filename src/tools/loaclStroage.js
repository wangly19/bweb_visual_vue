// 本地存储封装

/**
 * 获取存储节点
 * @param {string} where => 获取存储的item字段
 */
const getLocalStroage = (where) => {
  return localStorage.getItem(where)
}

/**
 * 设置存储值
 * @param {string}
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
