'use strict'

import axios from 'axios'
import config from './config'

function install (Vue) {
  let instance = axios.create({
    baseURL: config.baseUrl,
    withCredentials: true
  })

  const interceptRes = (response) => {
    if (response.data.code !== 0) {
      let message = response.data.message
      if (message.constructor === {}.constructor) {
        message = JSON.stringify(message)
      }
      window.vue.$message.error(message)
      return Promise.reject(new Error(JSON.stringify(response.data)))
    }
    return response
  }

  const interceptErr = (error) => {
    let res = error.response
    if (res && res.status === 401) {
      sessionStorage.fromRoute = window.vue.$route.path
      location.assign(config.authorizeUrl)
    } else {
      window.vue.$message.error(error.message)
    }
    return Promise.reject(error)
  }

  instance.interceptors.response.use(interceptRes, interceptErr)

  Vue.prototype.$axios = instance
}

export default install
