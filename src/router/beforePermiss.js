import router from '../router'
import store from '../store'
import {
  getLocalStroage
} from '../tools/loaclStroage'
const whiteList = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  const hasToken = getLocalStroage('token')
  // 判断token是否存在
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next() // 存在权限列表
      } else {
        try {
          // 有token，没权限，获取个人信息
          const { roles } = await store.dispatch('getUserinfo') // => 获取个人信息
          console.log(roles, 'roles')
          const sendRoutes = await store.dispatch('init', roles)
          console.log(sendRoutes)
          router.addRoutes(sendRoutes)
          console.log(router)
          next({ ...to, replace: true })
        } catch (error) {
          console.log('重新登录')
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
