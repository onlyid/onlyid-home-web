'use strict'

let clientId = '599bace06898da5df960a055'
let redirectUri = 'https://onlyid.net/#/auth'
if (process.env.NODE_ENV !== 'production') {
  clientId = '5a195e47ebee7194b088f712'
  redirectUri = 'http://onlyid.net:8080/#/auth'
}

const prod = {
  baseUrl: 'https://onlyid.net',
  authorizeUrl: 'https://oauth.onlyid.net/authorize?response_type=code&client_id=' +
  clientId + '&state=123&redirect_uri=' + encodeURIComponent(redirectUri),
  maxClientCount: 10,
  rules: {
    name: [
      { required: true, message: '请输入名称', trigger: 'blur' },
      { max: 30, message: '名称要小于30字符', trigger: 'blur' }
    ],
    redirectUri: [
      { required: true, message: '请输入redirect uri', trigger: 'blur' },
      { max: 300, message: 'redirect uri要小于300字符', trigger: 'blur' },
      { type: 'url', message: 'redirect uri不是合法url', trigger: 'blur' }
    ],
    type: [
      { required: true, message: '请选择类型', trigger: 'change' }
    ]
  },
  defaultRedirectUri: 'https://oauth.onlyid.net/default_redirect_uri',
  userUrl: 'https://user.onlyid.net'
}

const dev = {
  baseUrl: 'http://onlyid.net:3000',
  authorizeUrl: 'http://oauth.onlyid.net:3001/authorize?response_type=code&client_id=' +
  clientId + '&state=123&redirect_uri=' + encodeURIComponent(redirectUri),
  defaultRedirectUri: 'http://oauth.onlyid.net:3001/default_redirect_uri',
  userUrl: 'http://user.onlyid.net:8082'
}

if (process.env.NODE_ENV !== 'production') {
  for (let k in dev) {
    prod[k] = dev[k]
  }
}
export default prod
