import { createRouter, createWebHashHistory } from 'vue-router'
// import Login from '@/pages/login'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../layout/index.vue'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/pages/users/index.vue')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/pages/categories/index.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/pages/goods/index.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/pages/orders/index.vue')
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('@/pages/params/index.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/pages/reports/index.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/pages/rights/index.vue')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/pages/roles/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
