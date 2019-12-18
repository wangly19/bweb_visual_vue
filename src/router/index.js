import Vue from 'vue'
import VueRouter from 'vue-router'
import costomRoutes from './costomRoutes'
Vue.use(VueRouter)

const routes = costomRoutes

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
