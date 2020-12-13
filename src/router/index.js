import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import( /* webpackChunkName: "main" */ '../layouts/main/Index.vue'),
    children: [{
        path: "/",
        redirect: "/inicio"
      },
      {
        path: '/inicio',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Index.vue'),
      },      
      {
        path: '/scanner',
        name: 'scanner',
        component: () => import('@/views/scanner/Index.vue'),
      },      
    ]
  },
  {
    path: '',
    component: () => import('@/layouts/empty/Index.vue'),
    children: [{
      path: '/ingresar',
      name: 'login',
      component: () => import('@/views/auth/login/Index.vue'),
    }]
  },

  // Redirect to 404 page, if no match found-
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
})

export default router