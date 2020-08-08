const state = {
  currentPage: ''
}

const getters = {
  currentPage(state) {
    return state.currentPage
  }
}

const mutations = {
  setCurrentPage(state, payload) {
    state.currentPage = payload.currentPage
  }
}

const actions = {
  setCurrentPage({ commit }, payload) {
    commit('setCurrentPage', payload)
  }
}

const app = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default app
