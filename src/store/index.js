import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import instance from './modules/instance'
import _206 from './modules/206'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    app,
    user,
    instance,
    _206
  }
})

export default store
