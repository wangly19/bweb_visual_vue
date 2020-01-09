import http from '@/api'

const getDeviceList = (data) => {
  return http({
    url: '/api/device/list',
    method: 'get',
    data
  })
}
const getWarnList = data => {
  return http({
    url: '/api/device/warnlist',
    method: 'get',
    data
  })
}
export {
  getDeviceList,
  getWarnList
}
