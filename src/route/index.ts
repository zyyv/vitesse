import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import { getToken } from '../utils/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/', name: 'layout', component: () => import('/@c/Layout/index.vue'),
    children: [
      {
        path: '/', name: 'home', component: () => import('/@/views/home.vue')
      }
    ]
  },
  // { path: '/404', name: '404', component: () => import('/@/views/error/404.vue') },
  // { path: '/500', name: '500', component: () => import('/@/views/error/500.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   const hasToken = getToken()
//   if (hasToken) {
//     if (to.fullPath === '/login') {
//       next({ path: '/' })
//     } else {
//       if (!to.matched.length) {
//         next({ path: '/404' })
//       }
//       next()
//     }
//   } else {
//     if (to.fullPath === '/login') {
//       next() // 判断是否是 /login 跳 /login 防止无线递归循环
//     } else {
//       next({ path: '/login' })
//     }
//   }
// })

export default router