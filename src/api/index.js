/**
 * axios请求封装
 * 拦截器消息处理
 * 接收器回调方法
 */
import IV from 'view-design'
import Axios from 'axios'
import { getLocalStroage } from '../tools/loaclStroage'

const service = Axios.create({
  //  1111
  baseURL: 'http://wangly.com:8080', // 基础AI
  timeout: 8000 // 请求超时时间，
})

service.interceptors.request.use(cfg => {
  const _TOKEN = getLocalStroage('token')
  if (_TOKEN) {
    cfg.headers['X-Token'] = _TOKEN
  }
  return cfg
})

service.interceptors.response.use(
  response => {
    IV.LoadingBar.start() // 开启加载事件
    if (response.status === 200) {
       // 停止加载
    }
    IV.LoadingBar.finish()
    return Promise.resolve(response)
  },
  error => {
    IV.LoadingBar.error() // 停止加载
    return Promise.reject(error)
  }
)

export default service
