import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Rem解决方案
import '@/tools/resetPageSize'
// 引入样式重置样式
import '@/assets/scss/reset.d.css'
// 引入antVueUI
import Design from 'view-design'
import 'view-design/dist/styles/iview.css'
// 引入路由过滤
import '@/router/routeConfig'
// 引入地图
import '@/assets/config/mapConfig'
import '@/tools/directive/loading'
import '@fortawesome/fontawesome-free/css/all.css'
// 引入图表
import Viser from 'viser-vue'

Vue.use(Viser)
Vue.use(Design)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
