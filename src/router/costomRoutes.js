/**
 * 渲染的路由列表
 */
import Main from '../views/Layout/Home.vue'

export default [{
    path: '/',
    name: '首页',
    component: Main,
    redirect: '/desktop',
    children: [{
      path: '/desktop',
      name: '首页',
      component: () => import('@/views/Dashboard')
    }]
  },
  {
    path: '/machine',
    name: '设备',
    component: Main,
    redirect: '/machine/index',
    children: [{
      path: 'index',
      name: '设备',
      component: () => import('@/views/Machine')
    }]
  },
  {
    path: '/gis',
    name: 'GIS',
    redirect: '/gis/index',
    component: Main,
    children: [{
      path: 'index',
      name: 'GIS',
      component: () => import('@/views/GIS')
    }]
  },
  {
    path: '/about',
    name: '关于',
    component: Main,
    children: [{
      path: '/about/a1',
      name: '关于',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }]
  },
  {
    path: '/login',
    name: '登录',
    hidden: true,
    component: () => import('../views/Login')
  },
  {
    path: '/404',
    name: '错误警告',
    component: () => import('@/views/404'),
    hidden: true // 隐藏页面
  },
  {
    path: '*',
    name: '错误警告',
    redirect: '/404',
    hidden: true // 隐藏页面
  }
]
