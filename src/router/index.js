import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/pc/'
  : '/'
Vue.use(Router)
const router = new Router({
  routes,
  mode: 'hash',
  base: BASE_URL
})
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
    next() // 跳转
  // 路由拦截(跳转之前)
})

router.afterEach(to => {
  // 路由拦截（跳转之后）
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
