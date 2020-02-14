import service from '@/api/axios.config'

export function getNoticeList(params: object): Promise<any> {
  return service({
    url: `/noticeDevice`,
    method: 'get',
    params
  })
}
