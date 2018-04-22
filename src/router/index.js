'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Hi from '@/components/Hi'
import Auth from '@/components/Auth'
import Downloads from '@/components/Downloads'
import Pricing from '@/components/Pricing'
import Experience from '@/components/Experience'
import Signup from '@/components/Signup'

import Docs from '@/components/docs/Docs'
import DocsHome from '@/components/docs/Home'
import DocsOverview from '@/components/docs/Overview'
import DocsOAuth2 from '@/components/docs/OAuth2'
import DocsPrepare from '@/components/docs/Prepare'
import DocsWeb from '@/components/docs/Web'
import DocsAndroid from '@/components/docs/Android'
import DocsiOS from '@/components/docs/iOS'
import DocsCustom from '@/components/docs/Custom'
import DocsSecurity from '@/components/docs/Security'
import DocsFAQ from '@/components/docs/FAQ'
import DocsReview from '@/components/docs/review'
import DocsChangelog from '@/components/docs/Changelog'

import Console from '@/components/console/Console'
import Client from '@/components/console/Client'
import ClientUpdate from '@/components/console/ClientUpdate'
import ClientCreate from '@/components/console/ClientCreate'
import ConsoleOverview from '@/components/console/Overview'
import ConsolePrivateApply from '@/components/console/PrivateApply'
import ConsoleMobileAccount from '@/components/console/MobileAccount'
import ConsoleAnalytics from '@/components/console/Analytics'
import ConsoleSettings from '@/components/console/Settings'
import ConsoleAccount from '@/components/console/Account'

import Careers from '@/components/about/Careers'
import AboutUs from '@/components/about/AboutUs'
import Agreement from '@/components/about/Agreement'
import Privacy from '@/components/about/Privacy'

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
        {path: '', component: DocsHome},
        {path: 'overview', component: DocsOverview},
        {path: 'oauth2', component: DocsOAuth2},
        {path: 'prepare', component: DocsPrepare},
        {path: 'web', component: DocsWeb},
        {path: 'android', component: DocsAndroid},
        {path: 'ios', component: DocsiOS},
        {path: 'custom', component: DocsCustom},
        {path: 'security', component: DocsSecurity},
        {path: 'faq', component: DocsFAQ},
        {path: 'review', component: DocsReview},
        {path: 'changelog', component: DocsChangelog}
      ]
    },
    {
      path: '/console',
      component: Console,
      children: [
        {path: 'overview', component: ConsoleOverview},
        {path: 'analytics/:id', component: ConsoleAnalytics},
        {path: 'analytics', component: ConsoleAnalytics},
        {path: 'settings/:id', component: ConsoleSettings},
        {path: 'settings', component: ConsoleSettings},
        {path: 'private/apply', component: ConsolePrivateApply},
        {path: 'account', component: ConsoleAccount},
        {path: 'mobile-account', component: ConsoleMobileAccount},
        {path: 'clients/create', component: ClientCreate}
      ]
    },
    {
      path: '/console/clients/:id/update',
      component: ClientUpdate
    },
    {
      path: '/console/clients/create',
      component: ClientCreate
    },
    { // 要放在create下面，不然create会匹配不到
      path: '/console/clients/:id',
      component: Client
    },
    {
      path: '/auth',
      component: Auth
    },
    {
      path: '/downloads',
      component: Downloads
    },
    {
      path: '/pricing',
      component: Pricing
    },
    {
      path: '/experience',
      component: Experience
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/about-us',
      component: AboutUs
    },
    {
      path: '/agreement',
      component: Agreement
    },
    {
      path: '/privacy',
      component: Privacy
    },
    {
      path: '/careers',
      component: Careers
    },
    {
      path: '/hi',
      component: Hi
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 只有#不行，#后面要接具体锚点值
    if (to.hash && to.hash.length > 1) {
      return {
        selector: to.hash
      }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const path = to.path
  if (path === '/console') {
    return next('/console/overview')
  }

  if (!path.startsWith('/console')) {
    return next()
  }

  const developer = sessionStorage.getObj('developer')
  if (developer) {
    if (path.startsWith('/console/private') && !path.startsWith('/console/private/apply') && developer.plan !== 'pro') {
      return next('/console/private/apply')
    }
    return next()
  }

  next(false)
  sessionStorage.fromRoute = path
  location.assign(config.authorizeUrl)
})

export default router
