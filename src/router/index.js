'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Hi from '@/components/Hi'
import User from '@/components/User'
import Docs from '@/components/Docs'
import Console from '@/components/Console'
import DocsWeb from '@/components/DocsWeb'
import DocsAndroid from '@/components/DocsAndroid'
import DocsiOS from '@/components/Docs-iOS'
import DocsHome from '@/components/DocsHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/docs',
      component: Docs,
      children: [
        {path: 'web', component: DocsWeb},
        {path: 'android', component: DocsAndroid},
        {path: 'ios', component: DocsiOS},
        {path: '', component: DocsHome}
      ]
    },
    {
      path: '/console',
      component: Console
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/hi',
      component: Hi
    }
  ]
})
