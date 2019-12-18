import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import heyUI from 'heyui'
// 引入路由配置
import './router/beforePermiss'
// 引入样式
import 'heyui/themes/index.css'
// 引入样式充值文件
import './assets/css/reset.css'
// 引入公共css
import './assets/css/content.set.scss'
// 引入HEYUI
Vue.use(heyUI)
// 引入mock
import './mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
