import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f2f3a24 = () => interopDefault(import('../pages/admin-uni.vue' /* webpackChunkName: "pages/admin-uni" */))
const _c6595af8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _e7de33f2 = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _bd66cf76 = () => interopDefault(import('../pages/index/about/index.vue' /* webpackChunkName: "pages/index/about/index" */))
const _619adcc2 = () => interopDefault(import('../pages/index/grammar-course/index.vue' /* webpackChunkName: "pages/index/grammar-course/index" */))
const _25cd0093 = () => interopDefault(import('../pages/index/hall-of-fame/index.vue' /* webpackChunkName: "pages/index/hall-of-fame/index" */))
const _a4bc48f2 = () => interopDefault(import('../pages/index/ielts/index.vue' /* webpackChunkName: "pages/index/ielts/index" */))
const _aed3828c = () => interopDefault(import('../pages/index/kindergarten-course/index.vue' /* webpackChunkName: "pages/index/kindergarten-course/index" */))
const _edc3869e = () => interopDefault(import('../pages/index/news/index.vue' /* webpackChunkName: "pages/index/news/index" */))
const _f1594a18 = () => interopDefault(import('../pages/index/online-testing/index.vue' /* webpackChunkName: "pages/index/online-testing/index" */))
const _08c552e6 = () => interopDefault(import('../pages/index/presentation-course/index.vue' /* webpackChunkName: "pages/index/presentation-course/index" */))
const _0c260ca4 = () => interopDefault(import('../pages/index/primary-course/index.vue' /* webpackChunkName: "pages/index/primary-course/index" */))
const _3931d29c = () => interopDefault(import('../pages/index/secondary-course/index.vue' /* webpackChunkName: "pages/index/secondary-course/index" */))
const _5ee73854 = () => interopDefault(import('../pages/index/steam-course/index.vue' /* webpackChunkName: "pages/index/steam-course/index" */))
const _8c40e378 = () => interopDefault(import('../pages/index/storytelling-course/index.vue' /* webpackChunkName: "pages/index/storytelling-course/index" */))
const _3436d7dc = () => interopDefault(import('../pages/index/toeic/index.vue' /* webpackChunkName: "pages/index/toeic/index" */))
const _247c356a = () => interopDefault(import('../pages/index/transition-course/index.vue' /* webpackChunkName: "pages/index/transition-course/index" */))
const _dcdbabfe = () => interopDefault(import('../pages/index/news/abc.vue' /* webpackChunkName: "pages/index/news/abc" */))
const _03b80bbb = () => interopDefault(import('../pages/index/hall-of-fame/_id.vue' /* webpackChunkName: "pages/index/hall-of-fame/_id" */))
const _33c5b759 = () => interopDefault(import('../pages/index/news/_id.vue' /* webpackChunkName: "pages/index/news/_id" */))
const _2106a7d1 = () => interopDefault(import('../pages/gmail-form.vue' /* webpackChunkName: "pages/gmail-form" */))
const _667af59b = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin-uni",
    component: _5f2f3a24,
    name: "admin-uni___vi"
  }, {
    path: "/en",
    component: _c6595af8,
    children: [{
      path: "",
      component: _e7de33f2,
      name: "index___en"
    }, {
      path: "about",
      component: _bd66cf76,
      name: "index-about___en"
    }, {
      path: "grammar-course",
      component: _619adcc2,
      name: "index-grammar-course___en"
    }, {
      path: "hall-of-fame",
      component: _25cd0093,
      name: "index-hall-of-fame___en"
    }, {
      path: "ielts",
      component: _a4bc48f2,
      name: "index-ielts___en"
    }, {
      path: "kindergarten-course",
      component: _aed3828c,
      name: "index-kindergarten-course___en"
    }, {
      path: "news",
      component: _edc3869e,
      name: "index-news___en"
    }, {
      path: "online-testing",
      component: _f1594a18,
      name: "index-online-testing___en"
    }, {
      path: "presentation-course",
      component: _08c552e6,
      name: "index-presentation-course___en"
    }, {
      path: "primary-course",
      component: _0c260ca4,
      name: "index-primary-course___en"
    }, {
      path: "secondary-course",
      component: _3931d29c,
      name: "index-secondary-course___en"
    }, {
      path: "steam-course",
      component: _5ee73854,
      name: "index-steam-course___en"
    }, {
      path: "storytelling-course",
      component: _8c40e378,
      name: "index-storytelling-course___en"
    }, {
      path: "toeic",
      component: _3436d7dc,
      name: "index-toeic___en"
    }, {
      path: "transition-course",
      component: _247c356a,
      name: "index-transition-course___en"
    }, {
      path: "news/abc",
      component: _dcdbabfe,
      name: "index-news-abc___en"
    }, {
      path: "hall-of-fame/:id?",
      component: _03b80bbb,
      name: "index-hall-of-fame-id___en"
    }, {
      path: "news/:id",
      component: _33c5b759,
      name: "index-news-id___en"
    }]
  }, {
    path: "/gmail-form",
    component: _2106a7d1,
    name: "gmail-form___vi"
  }, {
    path: "/login",
    component: _667af59b,
    name: "login___vi"
  }, {
    path: "/en/admin-uni",
    component: _5f2f3a24,
    name: "admin-uni___en"
  }, {
    path: "/en/gmail-form",
    component: _2106a7d1,
    name: "gmail-form___en"
  }, {
    path: "/en/login",
    component: _667af59b,
    name: "login___en"
  }, {
    path: "/",
    component: _c6595af8,
    children: [{
      path: "",
      component: _e7de33f2,
      name: "index___vi"
    }, {
      path: "about",
      component: _bd66cf76,
      name: "index-about___vi"
    }, {
      path: "grammar-course",
      component: _619adcc2,
      name: "index-grammar-course___vi"
    }, {
      path: "hall-of-fame",
      component: _25cd0093,
      name: "index-hall-of-fame___vi"
    }, {
      path: "ielts",
      component: _a4bc48f2,
      name: "index-ielts___vi"
    }, {
      path: "kindergarten-course",
      component: _aed3828c,
      name: "index-kindergarten-course___vi"
    }, {
      path: "news",
      component: _edc3869e,
      name: "index-news___vi"
    }, {
      path: "online-testing",
      component: _f1594a18,
      name: "index-online-testing___vi"
    }, {
      path: "presentation-course",
      component: _08c552e6,
      name: "index-presentation-course___vi"
    }, {
      path: "primary-course",
      component: _0c260ca4,
      name: "index-primary-course___vi"
    }, {
      path: "secondary-course",
      component: _3931d29c,
      name: "index-secondary-course___vi"
    }, {
      path: "steam-course",
      component: _5ee73854,
      name: "index-steam-course___vi"
    }, {
      path: "storytelling-course",
      component: _8c40e378,
      name: "index-storytelling-course___vi"
    }, {
      path: "toeic",
      component: _3436d7dc,
      name: "index-toeic___vi"
    }, {
      path: "transition-course",
      component: _247c356a,
      name: "index-transition-course___vi"
    }, {
      path: "news/abc",
      component: _dcdbabfe,
      name: "index-news-abc___vi"
    }, {
      path: "hall-of-fame/:id?",
      component: _03b80bbb,
      name: "index-hall-of-fame-id___vi"
    }, {
      path: "news/:id",
      component: _33c5b759,
      name: "index-news-id___vi"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
