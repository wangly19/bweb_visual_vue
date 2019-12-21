import Router from '../router'
import store from '../store'
import {
  getLocalStroage
} from '../tools/loaclStroage'

const whiteList = ['/login', '/404']
Router.beforeEach((to, from, next) => {
  // 对token进行授权
  if (getLocalStroage('token')) {
    // token 存在
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      //  判断用户是否加载权限
      if (store.getters.roles.length === 0) {
          // vuex没有用户信息
          store.dispatch('getUserinfo', getLocalStroage('token')) // => 获取个人信息
          store.dispatch('init', store.getters.roles) // => 根据个人信息获取路由列表
          Router.addRoutes(store.getters.router)
      }
      next()
    }
  } else {
    // 无token
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})
