import Main from '@/views/Home.vue'
export default [
  { path: '/', name: 'home', component: Main },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue') }
]
