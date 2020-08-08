const state = {
  user: null,
  token: '',
  jwtPayload: null
}

const getters = {
  user(state) {
    return state.user
  },

  token(state) {
    return state.token
  },

  jwtPayload(state) {
    return state.jwtPayload
  }
}

const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },

  setToken(state, payload) {
    state.token = payload.token
  },

  setJwtPayload(state, payload) {
    state.jwtPayload = payload.jwtPayload
  }
}

const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  },

  setToken({ commit }, payload) {
    commit('setToken', payload)
  },

  setJwtPayload({ commit }, payload) {
    commit('setJwtPayload', payload)
  }
}

const user = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default user
