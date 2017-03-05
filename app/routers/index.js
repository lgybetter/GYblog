import VueRouter from 'vue-router';
import login from '../pages/login';
import signin from '../pages/signin';
import home from '../pages/home';

const router = new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/',
      component: login,
    },
    {
      name: 'signin',
      path: '/signin',
      component: signin
    },
    {
      name: 'home',
      path: '/home',
      component: home
    }
  ]
});

export default router;