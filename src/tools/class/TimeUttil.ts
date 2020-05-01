class TimeUtil {
  // 时间格式化
  format(date: Date, formatText: string = 'yyyy-mm-dd hh:mm:ss') {
    date = new Date(date)
    const year: number = date.getFullYear()
    const month: number = date.getMonth() + 1
    const day: number = date.getDay()
    formatText = formatText
      .replace(/yyyy/i, String(year))
      .replace(/mm/i, String(month))
      .replace(/dd/i, String(day))
      .replace(/hh/i, String(date.getHours()))
      .replace(/mm/g, `$2${String(date.getMinutes())}`)
      .replace(/ss/i, String(date.getSeconds()))
    return formatText || ''
  }
  // 获取当前日期
  getDate(date:Date = new Date()) {
    return {
      'year': date.getFullYear(), // => 获取当前年份
      'month': date.getMonth() + 1, // => 获取当前月
      'day': date.getDay() // => 获取当前日期
    }
  }
  // 获取当前时间
  getTime(date: Date = new Date()) {
    return {
      'hour': date.getHours(),
      'minutes': date.getMinutes(),
      'seconds': date.getSeconds()
    }
  }
}
