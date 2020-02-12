import Vue from 'vue'
import Vuex from 'vuex'
import tickets from './tickets'

Vue.use(Vuex)

export default Vuex.Store({
  modules: {
    tickets
  }
})
