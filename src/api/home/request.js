import http from '../../api'

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

export {
  getMons,
  getInfo
}
