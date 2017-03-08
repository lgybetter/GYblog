import Vue from 'vue';
import Promise from 'bluebird';

export default {
  signUp(user) {
    return Vue.http.post('/user', user);
  },
  signIn(user) {
    return Vue.http.get('/user', user);
  }
}