const createLoginAPI = function (options: string) {
  return {
    status: 200,
    data: {
      success: true,
      token: 1111,
      message: '登陆成功'
    }
  }
}

export default {
  'post|/login': createLoginAPI,
  'get|/person': (option: any) => {
    return {
      status: 200,
      data: {
        success: true,
        avatar: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1361981880,3052617388&fm=111&gp=0.jpg',
        name: '王方华',
        roles: ['admin']
      }
    }
  }
}
