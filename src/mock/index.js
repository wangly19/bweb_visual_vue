import Mock from 'mockjs'

// 定义随机变量
const Random = Mock.Random
// 定义请求url
const __URL = 'http://wangly.com:8080'

const loginData = () => {
  return {
    token: Random.string(60), //  生成token
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

const cardData = {
  'list|4': [{
    'id|+1': [1, 2, 3, 4],
    'background|+1': [{
      background: '#5D9CEC'
    }, {
      background: '#66DFB7'
    }, {
      background: '#FFB280'
    }, {
      background: '#FBD677'
    }],
    'database|+1': [{
      icon: 'ios-checkmark',
      PID: Random.integer(0, 100),
      number: Random.integer(0, 1000),
      info: Random.csentence(6, 9)
    }, {
      icon: 'ios-checkmark',
      PID: Random.integer(0, 100),
      number: Random.integer(0, 1000),
      info: Random.csentence(6, 9)
    }, {
      icon: 'ios-checkmark',
      number: Random.integer(0, 1000),
      PID: Random.integer(0, 100),
      info: Random.csentence(6, 9)
    }]
  }]
}

Mock.mock(`${__URL}/api/login`, 'post', loginData)
Mock.mock(`${__URL}/api/userinfo`, 'post', userInfo)
Mock.mock(`${__URL}/api/card/list`, 'get', cardData)
