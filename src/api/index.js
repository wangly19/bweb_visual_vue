/**
 * axios请求封装
 * 拦截器消息处理
 * 接收器回调方法
 */

import Axios from 'axios'
import heyUI from 'heyui'
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
    heyUI.$Loading() // 开启加载事件
    if (response.status === 200) {
      heyUI.$Loading.close() // 停止加载
    } else {
      heyUI.$Loading.close() // 停止加载
    }
    return Promise.resolve(response)
  },
  error => {
    heyUI.$Loading.close() // 停止加载
    return Promise.reject(error)
  }
)

export default service
