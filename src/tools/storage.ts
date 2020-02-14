/**
 * 设置存储值
 * @param key 键名
 */
export function getStorage(key: string): any {
  const value: string | null | undefined = localStorage.getItem(key) || ''
  return value ? JSON.parse(value) : ''
}

export function setStorage(key: string, value: any): void {
  const valueJSON: string = JSON.stringify(value)
  localStorage.setItem(key, valueJSON)
}

export function removeStorage(key: string): void {
  localStorage.removeItem(key)
}
