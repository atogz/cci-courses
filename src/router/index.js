import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import(/* webpackChunkName: "about" */ '../views/Courses.vue')
  },
  {
    path: '/teaching',
    name: 'Teaching',
    component: () => import(/* webpackChunkName: "about" */ '../views/Teaching.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
