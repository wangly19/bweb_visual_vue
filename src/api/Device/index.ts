import service from '@/api/axios.config'

export function getDeviceList<T>(params: T, type: string): Promise<any> {
  return service({
    url: `/device`,
    method: type,
    params
  })
}

export function alterDevice<T>(id: number, params: T, type: string): Promise<any> {
  return service({
    url: `/device/${id}`,
    method: type,
    params
  })
}
