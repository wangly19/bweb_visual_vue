const asyncRoutes = [{
    path: '/administrator',
    name: 'Administrator',
    redirect: 'administrator/admin1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home'),
    meta: {
      title: '管理员板块',
      roles: ['admin']
    },
    children: [{
        path: 'admin1',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '表单管理',
          roles: ['admin']
        }
      },
      {
        path: 'admin2',
        name: 'AdminUserManage',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '用户管理',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/Administrator1',
    name: '第二个',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '管理员专属',
      roles: ['admin']
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]
export default asyncRoutes
