import service from '@/api/axios.config'

export function getKmsList(params: object = {}): Promise<any> {
  return service({
    url: '/kms/overslist',
    method: 'get',
    data: params
  })
}
