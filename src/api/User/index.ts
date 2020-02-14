import service from '@/api/axios.config'

export function getUserPartList(): Promise<any> {
  return service({
    url: '/user/partlist'
  })
}
