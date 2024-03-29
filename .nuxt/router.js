import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7481ed2c = () => import('..\\pages\\tutorials\\index.vue' /* webpackChunkName: "pages_tutorials_index" */).then(m => m.default || m)
const _1ce40296 = () => import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages_services_index" */).then(m => m.default || m)
const _558675ce = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _1b2dd788 = () => import('..\\pages\\accreditations.vue' /* webpackChunkName: "pages_accreditations" */).then(m => m.default || m)
const _20514526 = () => import('..\\pages\\services\\_slug.vue' /* webpackChunkName: "pages_services__slug" */).then(m => m.default || m)
const _72cb4be4 = () => import('..\\pages\\tutorials\\_slug.vue' /* webpackChunkName: "pages_tutorials__slug" */).then(m => m.default || m)
const _753e5093 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/tutorials",
			component: _7481ed2c,
			name: "tutorials"
		},
		{
			path: "/services",
			component: _1ce40296,
			name: "services"
		},
		{
			path: "/about",
			component: _558675ce,
			name: "about"
		},
		{
			path: "/accreditations",
			component: _1b2dd788,
			name: "accreditations"
		},
		{
			path: "/services/:slug",
			component: _20514526,
			name: "services-slug"
		},
		{
			path: "/tutorials/:slug",
			component: _72cb4be4,
			name: "tutorials-slug"
		},
		{
			path: "/",
			component: _753e5093,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
