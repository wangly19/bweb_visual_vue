import http from '@/api'

const getMons = () => {
  return http({
    url: '/api/login',
    method: 'post'
  })
}

const getInfo = () => {
  return http({
    url: `/api/userinfo`,
    method: 'post'
  })
}

const getCardList = () => {
  return http({
    url: `/api/card/list`,
    method: 'get'
  })
}

const putExit = () => {
  return http({
    url: '/api/exit',
    method: 'get'
  })
}
export {
  getMons,
  getInfo,
  getCardList,
  putExit
}
