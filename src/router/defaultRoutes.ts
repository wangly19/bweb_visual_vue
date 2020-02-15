import { RouteConfig } from 'vue-router'
import Layout from '@/layout/Home.vue'

const defaultRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'dashboard',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '仪表盘',
      icon: 'fa-rocket',
      hidden: false
    },
    children: [{
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        title: '仪表盘',
        icon: 'fa-rocket',
        hidden: false
      },
      component: (resolve: any) => {
        require(['@/views/Dash/dash.vue'], resolve)
      }
    }]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      icon: 'air-login-bars',
      hidden: true
    },
    component: (resolve: any) => {
      require(['@/views/Login'], resolve)
    }
  },
  {
    path: '/404',
    name: 'error',
    meta: {
      title: '错误页面',
      icon: '',
      hidden: true
    },
    component: (resolve: any) => {
      require(['@/views/Error/404'], resolve)
    }
  }
]

export default defaultRoutes
