import service from '@/api/axios.config'

export function getWarnList<T>(params: T, type: string): Promise<any> {
  return service({
    url: `/warningDevice`,
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
