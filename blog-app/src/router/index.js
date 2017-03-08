import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/views/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: auth
    }
  ]
})
