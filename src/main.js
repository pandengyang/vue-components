import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import router from './router'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ViewUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
