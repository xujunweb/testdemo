import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'
import filter from '@/libs/filter'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

import './styles/quasar.styl'
import 'quasar-framework/dist/quasar.ie.polyfills'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {}
})
Vue.use(iview)
if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.config.productionTip = false
// 注册过滤器
filter.install(Vue)
// 全局注册应用配置
Vue.prototype.$config = config
window.app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
