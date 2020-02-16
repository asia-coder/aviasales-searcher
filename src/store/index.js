import Vuex from 'vuex'
import Vue from 'vue'
import tickets from './tickets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tickets
  }
})
