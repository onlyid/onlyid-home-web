'use strict'

const prod = {
  baseUrl: 'https://console.onlyid.net',
  consoleUrl: 'https://console.onlyid.net/#/overview',
  authorizeUrl: 'https://my.onlyid.net/authorize?response_type=code&client_id=5ad972dcb838b53ec26b2481&state=123&redirect_uri=' +
    encodeURIComponent('https://onlyid.net/auth')
}

const dev = {
  baseUrl: 'http://onlyid3:3000',
  consoleUrl: 'http://console.onlyid.net:8080/#/overview',
  authorizeUrl: 'http://onlyid3:3001/authorize?response_type=code&client_id=5a195e47ebee7194b088f712&state=123&redirect_uri=' +
    encodeURIComponent('http://onlyid.net:8085/auth')
}

if (process.env.NODE_ENV !== 'production') {
  Object.assign(prod, dev)
}

export default prod
