// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
'use strict'

import Vue from 'vue'
import ElementUI from 'element-ui'
import { VueBus, Storage } from 'onlyid-frontend-common'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import AxiosUtil from './axios-util'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueBus)
Vue.use(AxiosUtil)
Vue.use(Storage)

/* eslint-disable no-new */
window.vue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
