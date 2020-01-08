import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入路由配置
import './router/beforePermiss'
// 引入样式重置文件
import './assets/css/reset.css'
// 引入公共css
import './assets/css/content.set.scss'
// 引入iview
import viewUI from 'view-design'
// 引入iview的css
import 'view-design/dist/styles/iview.css'
Vue.use(viewUI)
// 引入mock
import './mock'
// 引入适配js
import '@/tools/setSize'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
