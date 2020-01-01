import http from '@/api'

const getDeviceList = (data) => {
  return http({
    url: '/api/device/list',
    method: 'get',
    data
  })
}

export {
  getDeviceList
}
