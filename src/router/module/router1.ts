// 路由1
export default {
  path: '/base1',
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
