const state = {
  standardAfns: null,
  standardParams: null
}

const getters = {
  standardAfns(state) {
    return state.standardAfns
  },

  standardParams(state) {
    return state.standardParams
  }
}

const mutations = {
  setStandardAfns(state, payload) {
    state.standardAfns = payload.standardAfns
  },

  setStandardParams(state, payload) {
    state.standardParams = payload.standardParams
  }
}

const actions = {
  setStandardAfns({ commit }, payload) {
    commit('setStandardAfns', payload)
  },

  setStandardParams({ commit }, payload) {
    commit('setStandardParams', payload)
  }
}

const _206 = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default _206
