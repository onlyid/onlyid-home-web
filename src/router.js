'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Playground from './views/Playground'
import Experience from './views/Experience'
import Signup from './views/Signup'
import Auth from './views/Auth'

import Docs from './views/docs/Docs'
import DocsOverview from './views/docs/Overview'
import DocsOAuth2 from './views/docs/OAuth2'
import DocsWeb from './views/docs/Web'
import DocsAndroid from './views/docs/Android'
import DocsiOS from './views/docs/iOS'
import DocsCustom from './views/docs/Custom'
import DocsSecurity from './views/docs/Security'
import DocsFAQ from './views/docs/FAQ'

import About from './views/about/About'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Index, meta: { title: '开源账号' } },
    { path: '/experience', component: Experience, meta: { title: '在线体验' } },
    { path: '/signup', component: Signup, meta: { title: '注册' } },
    { path: '/auth', component: Auth, meta: { title: 'auth' } },
    {
      path: '/docs',
      component: Docs,
      children: [
        { path: 'overview', component: DocsOverview, meta: { title: '产品概述' } },
        { path: 'oauth2', component: DocsOAuth2, meta: { title: 'OAuth 2.0入门' } },
        { path: 'web', component: DocsWeb, meta: { title: '网站接入' } },
        { path: 'android', component: DocsAndroid, meta: { title: 'Android接入' } },
        { path: 'ios', component: DocsiOS, meta: { title: 'iOS接入' } },
        { path: 'custom', component: DocsCustom, meta: { title: '自定义选项（基础）' } },
        { path: 'security', component: DocsSecurity, meta: { title: '安全性' } },
        { path: 'faq', component: DocsFAQ, meta: { title: '常见问题' } }
      ]
    },
    { path: '/about', component: About, meta: { title: '关于我们' } },
    { path: '/playground', component: Playground, meta: { title: 'playground' } }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 只有#不行，#后面要接具体锚点值
    if (to.hash && to.hash.length > 1) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.afterEach((to) => {
  document.title = '唯ID - ' + to.meta.title
})

export default router
