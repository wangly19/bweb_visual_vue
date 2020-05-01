export function cssExpand<T>(css: T, id: string) {
  let style: HTMLStyleElement = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = `@charset "UTF-8"; ${css}`
  // 清除旧样式
  if (id) {
    let $style: HTMLElement | null = document.getElementById(id)
    if ($style != null) $style.outerHTML = ''
    style.id = id
  }
  // 应用新样式
  document.head.appendChild(style)
}
