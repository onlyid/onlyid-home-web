'use strict'

import Vue from 'vue'
import ElementUI from 'element-ui'
import { VueBus, Storage } from 'onlyid-web-common'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style.css'
import App from './App'
import router from './router'
import AxiosUtil from './axios-util'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueBus)
Vue.use(AxiosUtil)
Vue.use(Storage)

window.vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
