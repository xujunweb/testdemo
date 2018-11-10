import Main from '@/views/Home.vue'
export default [
  { path: '/', name: 'home', component: Main },
  { path: '/about/add', name: 'add', component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue') }
]
