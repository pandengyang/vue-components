const state = {
  instances: null
}

const getters = {
  instances(state) {
    return state.instances
  }
}

const mutations = {
  setInstances(state, payload) {
    state.instances = payload.instances
  }
}

const actions = {
  setInstances({ commit }, payload) {
    commit('setInstances', payload)
  }
}

const instance = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default instance
