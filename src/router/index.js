import { createRouter, createWebHistory } from "vue-router";
// import { parseJwt } from '../mixins/utils.js'

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
    // meta: { layout: 'login' },
  },
  {
    path: "/store",
    name: "Store",
    component: () => import("../views/Store.vue"),
    // meta: { layout: 'login' },
  },
  {
    path: "/reports",
    name: "Reports",
    component: () => import("../views/Reports.vue"),
    // meta: { layout: 'login' },
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
    // meta: { layout: 'login' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/', '/login', '/sign-up', '/forgot-password', '/reset-password']
//   const authNotRequired = !publicPages.includes(to.path)
//   const notLoggedIn = localStorage.getItem('session')
//   if ((authNotRequired && notLoggedIn) || publicPages.includes(`/${to.path.split('/')[1]}`)) {
//     next()
//   } else {
//     next('/')
//   }
// })

export default router;
