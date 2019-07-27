'use strict'

const prod = {
  baseUrl: 'https://console.onlyid.net',
  consoleUrl: 'https://console.onlyid.net/#/overview',
  authUrl: 'https://my.onlyid.net/auth?client_id=5ad972dcb838b53ec26b2481&redirect_uri=' +
    encodeURIComponent('https://www.onlyid.net/auth')
}

const dev = {
  baseUrl: 'http://onlyid2:3000',
  consoleUrl: 'http://console.onlyid.net:8080/#/overview',
  authUrl: 'http://onlyid2:3001/auth?client_id=5b6d56f1e54929de6dff559f&redirect_uri=' +
    encodeURIComponent('http://onlyid.net:8085/auth')
}

if (process.env.NODE_ENV !== 'production') {
  Object.assign(prod, dev)
}

export default prod
