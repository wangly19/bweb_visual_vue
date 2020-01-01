import Mock from 'mockjs'

// 定义随机变量
const Random = Mock.Random
// 定义请求url
const __URL = 'http://wangly.com:8080'

// 登录数据
const loginData = () => {
  return {
    token: Random.string(60), //  生成token
    status: true,
    statusText: '登录成功'
  }
}

// 当前用户信息数据
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

// 卡片数据
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

// 设备
const deviceData = (config) => {
  const pageSize = JSON.parse(config.body).pageSize
  let list = []
  for (let i = 0; i < pageSize; i++) {
    list.push({
      id: i + 1,
      gbid: Random.integer(10000, 1000000),
      name: Random.csentence(3, 5),
      scope: Random.csentence(3, 5),
      monad: Random.csentence(3, 5),
      type: '高消耗',
      status: Random.integer(0, 1),
      address: Random.csentence(9, 20)
    })
  }
  return {
    status: true,
    statusText: '请求成功',
    pageSize: pageSize,
    total: Random.integer(100, 300),
    list
  }
}
Mock.mock(`${__URL}/api/login`, 'post', loginData)
Mock.mock(`${__URL}/api/userinfo`, 'post', userInfo)
Mock.mock(`${__URL}/api/card/list`, 'get', cardData)
Mock.mock(`${__URL}/api/device/list`, 'get', deviceData)
