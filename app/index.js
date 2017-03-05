import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import app from './app';
import router from './routers';
import store from './store';


Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: to => to(app)
}).$mount('#app');