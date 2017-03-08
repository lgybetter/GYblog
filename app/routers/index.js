import VueRouter from 'vue-router';
import auth from '../pages/auth';
import home from '../pages/home';

const router = new VueRouter({
  routes: [
    {
      name: 'auth',
      path: '/',
      component: auth,
    },
    {
      name: 'home',
      path: '/home',
      component: home
    }
  ]
});

export default router;