import service from '@/api/axios.config'

export function getDashRank(params: object = {}): Promise<any> {
  return service({
    url: '/dash/rank',
    method: 'get'
  })
}
