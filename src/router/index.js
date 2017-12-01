'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Hi from '@/components/Hi'
import Docs from '@/components/Docs'
import Console from '@/components/Console'
import DocsWeb from '@/components/DocsWeb'
import DocsAndroid from '@/components/DocsAndroid'
import DocsiOS from '@/components/Docs-iOS'
import DocsHome from '@/components/DocsHome'
import Auth from '@/components/Auth'
import Client from '@/components/Client'
import ClientUpdate from '@/components/ClientUpdate'
import ClientAdd from '@/components/ClientAdd'
import config from '@/config'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Index
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
      path: '/console/clients/:id/update',
      component: ClientUpdate
    },
    {
      path: '/console/clients/add',
      component: ClientAdd
    },
    { // 要放在add下面，不然add会匹配不到
      path: '/console/clients/:id',
      component: Client
    },
    {
      path: '/auth',
      component: Auth
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

router.beforeEach((to, from, next) => {
  const path = to.path
  if (!path.startsWith('/console')) {
    return next()
  }

  if (sessionStorage.getObj('user')) {
    return next()
  }

  next(false)
  sessionStorage.fromRoute = path
  location.assign(config.authorizeUrl)
})

export default router
