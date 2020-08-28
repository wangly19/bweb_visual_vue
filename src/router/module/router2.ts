// 路由1
export default {
  path: '/base2',
  name: 'dashboard',
  redirect: '/dashboard',
  children: [{
    path: '/dashboard',
    name: 'dashboard',
    component: (resolve: any) => {
      require(['@/views/Dash/dash.vue'], resolve)
    }
  }]
}
