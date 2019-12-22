/**
 * 睡眠函数
 * @param {number || int @date} time => 睡眠时间
 */
const sleep = (time = 500) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

/**
 * 防抖函数
 * @param {function} foo 需要防抖的函数
 * @param {number || int @date} awit => 防抖时间
 */
const debounce = (foo, awit) => {
    let timeout = null
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
           foo.apply(this, args)
        }, awit)
    }
}

/**
 * 节流函数
 * @param {function} foo 需要防抖的函数
 * @param {number || int @date} awit => 防抖时间
 */
const throttle = (foo, awit = 500) => {
    let status = true // 初始化
    return (...args) => {
        if (!status) return // 表示函数没执行完毕
        status = false // 执行中
        setTimeout(() => {
            foo.apply(this, args)
            status = true  // 节流成功
        }, awit)
    }
}

export {
    sleep,
    debounce,
    throttle
}
