import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    isLoading: false,
    menus: []
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload
    },
    updateUserMenus(state, payload) {
      state.menus = payload
    }
  }
})