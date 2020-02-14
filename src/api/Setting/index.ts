import service from '@/api/axios.config'
import axios from 'axios'

/**
 * 权限和下拉菜单栏并发
 */
export function getRoleList(): Promise<any> {
  return axios.all([
    service({
      url: '/setting/roles',
      method: 'get'
    }),
    service({
      url: '/component',
      method: 'get',
      params: {
        component: 'roles'
      }
    })
  ])
}

export function getSiteList(): Promise<any> {
  return axios.all([
    service({
      url: '/setting/sites',
      method: 'get'
    }),
    service({
      url: '/component',
      method: 'get',
      params: {
        component: 'roles'
      }
    })
  ])
}
