import Main from '../views/Layout/Home.vue'
const asyncRoutes = [
  {
    path: '/machine',
    name: 'machine',
    component: Main,
    meta: {
      icon: 'icon-lights',
      title: '总设备',
      roles: ['town']
    },
    redirect: '/machine/index',
    children: [{
      path: 'index',
      name: 'machine',
      meta: {
        title: '总设备',
        icon: 'icon-lights',
        roles: ['root']
      },
      component: () => import('@/views/Machine')
    },
    {
      path: 'warning',
      name: 'warnDevice',
      meta: {
        title: '警告设备',
        icon: 'icon-lights',
        roles: ['town']
      },
      component: () => import('@/views/Machine/warning')
    }
  ]
  },
  {
    path: '/about',
    name: 'about',
    component: Main,
    redirect: '/about/index',
    children: [{
      path: 'index',
      name: 'about',
      meta: {
        title: '关于',
        icon: 'icon-attachent'
      },
      component: () => import('../views/About')
    }]
  },
  {
    path: '/root',
    name: 'root',
    meta: {
      title: '管理员板块',
      icon: 'icon-all',
      roles: ['root', 'super']
    },
    component: Main,
    redirect: '/root/admin1',
    children: [{
        path: 'admin1',
        name: 'admin1',
        component: () => import('../views/About'),
        meta: {
          title: '表单管理',
          icon: 'icon-all',
          roles: ['root', 'model'],
          parent: 'root'
        }
      },
      {
        path: 'admin2',
        name: '管理员1-2',
        component: () => import('../views/About'),
        meta: {
          title: '用户管理',
          icon: 'icon-all',
          roles: ['root'],
          parent: 'root'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
export default asyncRoutes
