import Mock from 'mockjs'

// 定义随机变量
const Random = Mock.Random
// 定义请求url
const __URL = 'http://wangly.com:8080'

const loginData = () => {
  return {
    token: Random.string(60), //  生成token
    roles: ['admin', 'super'], //  生成权限
    status: true,
    statusText: '登录成功'
  }
}

const userInfo = () => {
  return {
    name: 'wangly',
    avatar: '',
    roles: ['admin', 'super'],
    token: '',
    status: true,
    statusText: '请求成功'
  }
}

Mock.mock(`${__URL}/api/login`, 'post', loginData)
Mock.mock(`${__URL}/api/userinfo`, 'post', userInfo)
