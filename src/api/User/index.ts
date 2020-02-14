import service from '@/api/axios.config'

export function getUserList<T>(params: T, type: string): Promise<any> {
  return service({
    url: `/user`,
    method: type,
    params
  })
}

export function alterUser<T>(id: number, params: T, type: string): Promise<any> {
  return service({
    url: `/user/${id}`,
    method: type,
    params
  })
}
