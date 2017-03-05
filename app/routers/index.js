import VueRouter from 'vue-router';
import login from '../pages/login';
import signin from '../pages/signin';

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
    }
  ]
});

export default router;