'use strict'

import axios from 'axios'
import config from './config'

const install = (Vue) => {
  let instance = axios.create({ baseURL: config.baseUrl, withCredentials: true })

  instance.interceptors.response.use((res) => { return res }, (err) => {
    let res = err.response
    if (res) {
      if (res.status === 401) {
        location.assign(config.homeUrl)
      } else {
        window.vue.$message.error(res.data.error)
      }
    } else {
      window.vue.$message.error(err.message)
    }
    return Promise.reject(err)
  })

  Vue.prototype.$axios = instance
}

export default install
