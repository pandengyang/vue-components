import VueRouter from 'vue-router'

const routes = [
  {
    path: '/solar-system/sun-earth-moon',
    name: 'SunEarthMoon',
    component: () => import('@/views/solar-system/sun-earth-moon/index.vue')
  }
]

const router = new VueRouter({ routes })
export default router
