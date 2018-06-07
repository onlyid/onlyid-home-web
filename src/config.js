'use strict'

let clientId = '5ad972dcb838b53ec26b2481'
let redirectUri = 'https://onlyid.net/#/auth'
if (process.env.NODE_ENV !== 'production') {
  clientId = '5a195e47ebee7194b088f712'
  redirectUri = 'http://onlyid.net:8080/#/auth'
}

const validateIp = (value) => {
  // 不允许有空格
  if (value.includes(' ')) {
    return false
  }
  const blocks = value.split('.')
  if (blocks.length !== 4) {
    return false
  }
  return blocks.every((block) => {
    if (isNaN(block)) {
      return false
    }
    return parseInt(block) >= 0 && parseInt(block) <= 255
  })
}

const prod = {
  admin: '5ad96df1b838b53ec26b2480',
  dateFormat: 'YYYY-MM-DD',
  clientIconAction: 'https://onlyid.net/clients/icons',
  clientIconMaxSize: 300 * 1024,
  baseUrl: 'https://onlyid.net',
  authorizeUrl: 'https://oauth.onlyid.net/authorize?response_type=code&client_id=' +
    clientId + '&state=123&redirect_uri=' + encodeURIComponent(redirectUri),
  maxClientCount: 5,
  clientRules: {
    icon: [
      { required: true, message: '请上传icon' }
    ],
    name: [
      { required: true, message: '请输入名称', trigger: 'blur' },
      { max: 30, message: '名称要小于30字符', trigger: 'blur' }
    ],
    redirectUris: [
      { required: true, message: '请输入redirect uri', trigger: 'blur' },
      { max: 300, message: 'redirect uri要小于300字符', trigger: 'blur' },
      { type: 'url', message: 'redirect uri不是合法url', trigger: 'blur' }
    ],
    type: [
      { required: true, message: '请选择类型', trigger: 'change' }
    ],
    serverIps: [
      {
        validator (rule, value, callback) {
          if (value === '') {
            return callback()
          }

          const ips = value.split(',')
          if (ips.length > 5) {
            return callback(new Error('不能超过5个ip'))
          }
          if (ips.every(validateIp)) {
            callback()
          } else {
            callback(new Error('存在不合法ip'))
          }
        },
        trigger: 'blur'
      }
    ],
    website: [
      // 和redirect uri一样
      { required: true, message: '请输入网址', trigger: 'blur' },
      { max: 300, message: '网址要小于300字符', trigger: 'blur' },
      { type: 'url', message: '不是合法url', trigger: 'blur' }
    ],
    appStore: [
      { required: true, message: '请选择类型', trigger: 'change' }
    ]
  },
  developerRules: {
    name: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
      { max: 10, message: '姓名要小于10字符', trigger: 'blur' }
    ],
    email: [
      { type: 'email', required: true, message: '邮箱格式有误，请修改', trigger: 'blur' }
    ]
  },
  defaultRedirectUri: 'https://oauth.onlyid.net/default_redirect_uri'
}

const dev = {
  admin: '5ab9d6c0a311fb85c69a98ee',
  clientIconAction: 'http://onlyid.net:3000/clients/icons',
  baseUrl: 'http://onlyid.net:3000',
  authorizeUrl: 'http://oauth.onlyid.net:3001/authorize?response_type=code&client_id=' +
    clientId + '&state=123&redirect_uri=' + encodeURIComponent(redirectUri),
  defaultRedirectUri: 'http://oauth.onlyid.net:3001/default_redirect_uri'
}

if (process.env.NODE_ENV !== 'production') {
  for (const k in dev) {
    prod[k] = dev[k]
  }
}
export default prod
