/**
 * 本地化mock数据
 */
import Mock, { mock } from 'mockjs'
const baseURL: string = 'http://wangfanghua.com'

// 加载所有Mock File
const mockFiles: __WebpackModuleApi.RequireContext = require.context('.', true, /\.ts$/)
let mockConfigList: Array<any> = []

// 注册mock组件
mockFiles.keys().forEach(fileName => {
  // 忽略index.ts
  if (fileName === 'index.ts') return
  mockConfigList = mockConfigList.concat(mockFiles(fileName).default)
})

mockConfigList.forEach(map => {
  if (map) {
    for (let key in map) {
      const pathSt: Array<string> = key.split('|')
      Mock.mock(pathSt[1], pathSt[0], map[key])
    }
  }
})

// 导出Mock数据
export default Mock
