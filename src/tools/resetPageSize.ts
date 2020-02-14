/**
 * 页面fontsize重置
 */
(function (window: Window): void {
  window.addEventListener('resize', function () {
    document.documentElement.style.fontSize = `${getWindowSize() / 10}px` // 按照设计图
  })
  document.documentElement.style.fontSize = `${getWindowSize() / 10}px` // 按照设计图
  console.warn('当前的设计图rem: ', getWindowSize())
})(window)

/**
 * 获取字体大小
 * @return 获取当前页面的宽度
 */
function getWindowSize (): number {
  const __width: number = document.documentElement.clientWidth
  return __width > 1920 ? 1920 : __width
}
