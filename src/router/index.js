import Vue from 'vue'
import VueRouter from 'vue-router'
import costomRoutes from './costomRoutes'
Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'history',
  routes: costomRoutes
})

const router = createRouter()

export default router
