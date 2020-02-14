import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import getters from './gettrer'
import promiss from './module/promiss'
import app from './module/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    promiss,
    app
  },
  getters
})
