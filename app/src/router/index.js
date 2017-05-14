import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/views/auth'
import home from '@/views/home'
import publish from '@/views/publish'
import personal from '@/views/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})

