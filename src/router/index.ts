import AgesViewVue from '@/views/AgesView.vue'
import GenderViewVue from '@/views/GenderView.vue'
import HomeViewVue from '@/views/HomeView.vue'
import SlidesViewVue from '@/views/SlidesView.vue'
import SplashViewVue from '@/views/SplashView.vue'
import WelcomeViewVue from '@/views/WelcomeView.vue'
import WeightViewVue from '@/views/WeightView.vue'
import HeightViewVue from '@/views/HeightView.vue'
import GoalsViewVue from '@/views/GoalsView.vue'
import LevelViewVue from '@/views/LevelView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import SingInViewVue from '@/views/SingInView.vue'
import SingUpViewVue from '@/views/SingUpView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import NotificationViewVue from '@/views/NotificationView.vue'
import BookmarkViewVue from "@/views/BookmarkView.vue";
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
      path: '/weight',
      name: 'weight',
      component: WeightViewVue
    },
    {
      path: '/height',
      name: 'height',
      component: HeightViewVue
    },
    {
      path: '/goals',
      name: 'goals',
      component: GoalsViewVue
    },
    {
      path: '/level',
      name: 'level',
      component: LevelViewVue
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileViewVue
    },
    {
      path: '/singin',
      name: 'singin',
      component: SingInViewVue
    },
    {
      path: '/singup',
      name: 'singup',
      component: SingUpViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeViewVue
    },
    {
      path: '/notification',
      name: 'notification',
      component: NotificationViewVue
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: BookmarkViewVue
    }
  ]
})

export default router
