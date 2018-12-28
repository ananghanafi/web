import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './interceptor'
import './filter'
import './mixin'
import './global_components'
import './assets/styl/style.styl'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
