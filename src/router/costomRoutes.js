/**
 * 渲染的路由列表
 */
import Main from '../views/Layout/Home.vue'

export default [{
    path: '/',
    name: 'desktop',
    component: Main,
    redirect: '/desktop',
    children: [{
      path: 'desktop',
      name: 'desktop',
      meta: {
        title: '首页',
        icon: 'icon-all'
      },
      component: () => import('@/views/Dashboard')
    }]
  },
  {
    path: '/machine',
    name: 'machine',
    component: Main,
    redirect: '/machine/index',
    children: [{
      path: 'index',
      name: 'machine',
      meta: {
        title: '设备',
        icon: 'icon-lights'
      },
      component: () => import('@/views/Machine')
    }]
  },
  {
    path: '/gis',
    name: 'gis',
    redirect: '/gis/index',
    component: Main,
    children: [{
      path: 'index',
      name: 'gis',
      meta: {
        title: 'GIS',
        icon: 'icon-ditu1'
      },
      component: () => import('@/views/GIS')
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
  }
]
