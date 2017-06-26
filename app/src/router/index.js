import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/views/auth'
import home from '@/views/home'
import publish from '@/views/publish'
import setting from '@/views/setting'
import notFound from '@/views/not-found'
import articleList from '@/views/article-list'
import personal from '@/views/personal'
import article from '@/views/article'
import stars from '@/views/stars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/',
      component: home,
      beforeEnter: (to, from, next) => {
        let token = JSON.parse(localStorage.getItem('token'))
        if (!token) {
          next('/auth')
        } else {
          next()
        }
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: articleList
        },
        {
          path: '/setting',
          name: 'setting',
          component: setting
        },
        {
          path: '/publish',
          name: 'publish',
          component: publish
        },
        {
          path: '/article/:id',
          name: 'atricle',
          component: article
        },
        {
          path: '/article/edit/:id',
          name: 'editArticle',
          component: publish
        },
        {
          path: '/stars',
          name: 'stars',
          component: stars
        }
      ]
    },
    {
      path: '/personal/:id',
      name: 'personal',
      component: personal
    },
    {
      path: '*',
      name: 'notFound',
      component: notFound
    }
  ]
})

