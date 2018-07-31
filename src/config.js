'use strict'

const prod = {
  consoleUrl: 'https://console.onlyid.net/#/overview'
}

const dev = {
  consoleUrl: 'http://console.onlyid.net:8080/#/overview'
}

if (process.env.NODE_ENV !== 'production') {
  Object.assign(prod, dev)
}

export default prod
