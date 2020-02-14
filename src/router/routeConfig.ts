/**
 * 路由管理器和守卫
 */
import Routes from '@/router'
import { Route } from 'vue-router'
import { RouteConfig } from 'vue-router'
import { getStorage } from '@/tools/storage'
import { LoadingBar, Message } from 'view-design'
import Store from '@/store'

// 初始化message
const $Message: any = Message
// 定向白名单
const whiteList: Array<string> = ['/login', '/404']
Routes.beforeEach(async (to: Route, from:Route, next: any) => {
  LoadingBar.start()
  if (to.path === '/404') {
    next()
    LoadingBar.finish()
    return
  }
  // 1.验证token
  const token: string | null | undefined = getStorage('token')
  if (token) {
    // token存在
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 非login，判断roles权限
      const roles: Array<string> = Store.getters.roles
      if (roles.length < 1) {
        // 没有权限，获取个人用户信息
        try {
          // 获取个人信息
          const status: boolean = await Store.dispatch('USERINFO')
          if (status) {
            // 重新鉴权，绘制路由列表
            const roles: Array<string> = Store.getters.roles
            const RoutesList: RouteConfig[] = await Store.dispatch('GenerateRoutes', roles)
            Routes.addRoutes(RoutesList)
            next({ ...to, replace: true })
          } else {
            // 登录接口调用失败，网络异常跳转到错误页面
            next({ path: '/404' })
          }
        } catch (e) {
          // token错误
          const status: boolean = await Store.dispatch('logout')
          status && $Message.error('令牌授权错误，重新登录')
          next(`/login`)
        }
      } else {
        next()
      }
    }
  } else {
    // token 不存在
    whiteList.indexOf(to.path) !== -1 ? next() : next('/login')
  }
})

// 路由守卫完成
Routes.afterEach(() => {
  // 守卫加载完成
  LoadingBar.finish()
})
