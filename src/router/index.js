import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './dynamicRouter'

Vue.use(VueRouter)

// 解决 Vue 路由传递参数时，出现 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation 问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
