import service from '@/api/axios.config'

export function upLogin(data: object): Promise<any> {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}

export function Person(): Promise<any> {
  return service({
    url: '/person',
    method: 'get'
  })
}
