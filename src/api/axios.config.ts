import axios from 'axios'
import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { getStorage } from '@/tools/storage'
import iView from 'view-design'

/* 创建axios实例 */
const axiosObject: any = axios
const Progress: any = iView
const service = axiosObject.default.create({
  // baseURL: 'http://api.wangfanghua.top:7300/mock/5e3eab4e216d1377dea9be86/service',
  baseURL: '/',
  timeout: 4000, // 请求超时时间
  maxContentLength: 4000
})

// 拦截器 - 请求
service.interceptors.request.use((config: AxiosRequestConfig) => {
  const token: string = getStorage('token')
  config.headers['X-Token'] = token || ''
  return config
})

// 拦截器 - 响应
service.interceptors.response.use((response: AxiosResponse) => {
  Progress.LoadingBar.start()
  // 开始加载进度条
  if (response.status === 200) {
    Progress.LoadingBar.finish()
    return response.data
  } else {
    Progress.LoadingBar.error()
    console.warn('请求发生错误')
  }
}, (error: any) => {
  Progress.LoadingBar.error()
  return Promise.reject(error)
})

export default service
