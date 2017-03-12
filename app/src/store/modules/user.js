import authApi from '../api/authApi'
import * as types from '../mutation-types'

const state = {
  user: JSON.parse(localStorage.getItem('user')) || {}
}

const getters = {
  user: state => state.user
}

const actions = {
  [types.SIGN_IN] ({ commit }, { user }) {
    return authApi.signIn(user).then(res => {
      localStorage.setItem('user', JSON.stringify(res.body.status))
      commit(types.SIGN_IN, { user: res.body.status })
      return Promise.resolve(res)
    })
  },
  [types.SIGN_UP] ({ commit }, { user }) {
    return authApi.signUp(user).then(res => {
      return Promise.resolve(res)
    })
  },
  [types.SIGN_OUT] ({ commit }) {
    commit(types.SIGN_OUT)
    localStorage.clear('user')
  }
}

const mutations = {
  [types.SIGN_IN] (state, { user }) {
    state.user = user || {}
  },
  [types.SIGN_OUT] (state) {
    state.user = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

