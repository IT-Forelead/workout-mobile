import AgesViewVue from '@/views/AgesView.vue'
import GenderViewVue from '@/views/GenderView.vue'
import HomeViewVue from '@/views/HomeView.vue'
import SlidesViewVue from '@/views/SlidesView.vue'
import SplashViewVue from '@/views/SplashView.vue'
import WelcomeViewVue from '@/views/WelcomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'spalashScreen',
      component: SplashViewVue
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeViewVue
    },
    {
      path: '/slides',
      name: 'threeSlides',
      component: SlidesViewVue
    },
    {
      path: '/gender',
      name: 'gender',
      component: GenderViewVue
    },
    {
      path: '/ages',
      name: 'ages',
      component: AgesViewVue
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeViewVue
    },
  ]
})

export default router
