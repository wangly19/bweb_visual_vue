const asyncRoutes = [{
    path: '/administrator',
    name: '管理员',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home'),
    meta: {
      title: '管理员板块',
      roles: ['admin']
    },
    children: [{
        path: 'admin1',
        name: '管理员1-1',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '表单管理',
          roles: ['admin']
        }
      },
      {
        path: 'admin2',
        name: '管理员1-2',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '用户管理',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/administrator1',
    name: '管理员',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home'),
    meta: {
      title: '管理员板块',
      roles: ['admin']
    },
    children: [{
        path: 'admin1',
        name: '管理员1-1',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '表单管理',
          roles: ['admin']
        }
      },
      {
        path: 'admin2',
        name: '管理员1-2',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '用户管理',
          roles: ['admin']
        }
      }
    ]
  }
]
export default asyncRoutes
