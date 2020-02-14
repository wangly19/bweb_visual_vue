import { RouteConfig } from 'vue-router'
import Layout from '@/layout/Home.vue'
import MapView from '@/views/KMS/map.vue'

const rolesRoutes: RouteConfig[] = [
  {
    path: '/deviceManage',
    name: 'deviceManage',
    meta: {
      title: '设备管理',
      icon: 'fa-adjust',
      hidden: false
    },
    component: Layout,
    children: [{
      path: '/deviceManage',
      name: 'deviceManage',
      meta: {
        title: '设备管理',
        icon: 'fa-adjust',
        hidden: false
      },
      component: (resolve: any) => {
        require(['@/views/Shop/index.vue'], resolve)
      }
    }]
  },
  {
    path: '/warningAdmin',
    name: 'warningAdmin',
    meta: {
      title: '警告管理',
      icon: 'fa-exclamation-triangle',
      hidden: false
    },
    component: Layout,
    children: [{
      path: '/warningList',
      name: 'warningList',
      meta: {
        title: '实时预警',
        icon: 'fa-bell',
        hidden: false
      },
      component: (resolve: any) => {
        require(['@/views/Warning/WarnList'], resolve)
      }
    },
    {
      path: '/warningHistory',
      name: 'warningHistory',
      meta: {
        title: '历史报警',
        icon: 'fa-radiation-alt',
        hidden: false
      },
      component: (resolve: any) => {
        require(['@/views/Warning/historyWarn'], resolve)
      }
    },
    {
      path: '/warningNotice',
      name: 'warningNotice',
      meta: {
        title: '设备预警',
        icon: 'fa-fire-alt',
        hidden: false
      },
      component: (resolve: any) => {
        require(['@/views/Warning/noticeWarn'], resolve)
      }
    }]
  },
  {
    path: '/kmsadmin',
    name: 'kmsadmin',
    meta: {
      title: '分布地图',
      icon: 'fa-truck',
      hidden: false
    },
    component: Layout,
    redirect: '/kmsmap',
    children: [
      {
        path: '/kmsmap',
        name: 'kmsadmin',
        meta: {
          title: '分布地图',
          icon: 'fa-truck',
          hidden: false
        },
        component: MapView
      }
    ]
  },
  {
    path: '/useradmin',
    name: 'useradmin',
    meta: {
      title: '人员管理',
      icon: 'fa-user',
      hidden: false
    },
    component: Layout,
    redirect: '/useradmin/user',
    children: [
      {
        path: '/useradmin/user',
        name: 'user',
        meta: {
          title: '账号管理',
          icon: 'fa-user',
          hidden: false
        },
        component: (resolve: any) => {
          require(['@/views/User/index.vue'], resolve)
        }
      },
      {
        path: '/useradmin/inform',
        name: 'inform',
        meta: {
          title: '账号申报',
          icon: 'fa-rss-square',
          hidden: false
        },
        component: (resolve: any) => {
          require(['@/views/User/userNavtion.vue'], resolve)
        }
      }
    ]
  },
  {
    path: '/AdminSetting',
    name: 'AdminSetting',
    meta: {
      title: '系统设置',
      icon: 'fa-wrench',
      hidden: false
    },
    component: Layout,
    children: [{
      path: '/roleSetting',
      name: 'roleSetting',
      meta: {
        title: '权限设置',
        icon: 'fa-user-shield',
        hidden: false
      },
      component: (resolve: any) => {
        require(['@/views/Setting/part.vue'], resolve)
      }
    },
    {
      path: '/siteSetting',
      name: 'siteSetting',
      meta: {
        title: '站点设置',
        icon: 'fa-user-edit',
        hidden: false
      },
      component: (resolve: any) => {
        require(['@/views/Setting/slite.vue'], resolve)
      }
    },
    {
      path: '/companySetting',
      name: 'companySetting',
      meta: {
        title: '公司设置',
        icon: 'fa-building',
        hidden: false
      }
    }]
  }
]

export default rolesRoutes
