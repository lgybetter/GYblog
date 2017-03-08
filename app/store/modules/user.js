import * as types from '../mutation-types';
import auth from '../api/auth';
import Promsie from 'bluebird';

const state = {
  user: JSON.parse(localStorage.getItem('user')) || {}
}

const getters = {
  user: state => state.user
}

const actions = {
  signIn({ commit }, { user }) {
    auth.signIn(user).then(res => {
      console.log(res);
    })
  },
  signUp({ commit }, { user }) {
    auth.signUp(user).then(res => {
      console.log(res);
    })
  }
}

const mutations = {
  
}

export default {
  state,
  getters,
  actions,
  mutations
}

