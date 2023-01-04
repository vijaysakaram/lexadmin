import Vue from 'vue'
import Router from 'vue-router'
// Routes
import AssociateRoutes from './associate.routes'
import HistoryRoutes from './history.routes'
Vue.use(Router)

export const routes = [{
  path: '/',
  redirect: '/home/documents'
}, {
  path: '/home/documents',
  name: 'home-documents',
  component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/home/homepage/HomePage.vue')
},
{
  path: '/ViewAssociations/document/:id',
  name: 'home-document-association-details',
  component: () =>
    import(
      /* webpackChunkName: "" */ '@/pages/home/homepage/ViewAssociations.vue'
    )
},
...AssociateRoutes,
...HistoryRoutes,
{
  path: '/blank',
  name: 'blank',
  component: () => import(/* webpackChunkName: "blank" */ '@/pages/BlankPage.vue')
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes
})

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {
  return next()
})

/**
 * After each route update
 */
router.afterEach((to, from) => {
})

export default router
