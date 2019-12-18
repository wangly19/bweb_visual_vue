/**
 * 渲染的路由列表
 */
import Home from '../views/Home.vue'

export default [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: Home,
    children: [{
      path: '/about/a1',
      name: 'abouts',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  }
]
