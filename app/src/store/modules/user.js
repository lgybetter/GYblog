import authApi from '../api/auth-api'
import * as types from '../mutation-types'
import config from '../config'

const state = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  token: JSON.parse(localStorage.getItem('token')) || ''
}

const getters = {
  user: state => state.user,
  token: state => state.token
}

const actions = {
  signIn ({ commit }, { user }) {
    return authApi.signIn(user).then(res => {
      localStorage.setItem('user', JSON.stringify(res.body.data))
      localStorage.setItem('token', JSON.stringify(res.body.token))
      config.options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      }
      commit(types.SIGN_IN, { user: res.body.data, token: res.body.token })
      return Promise.resolve(res)
    })
  },
  signUp ({ commit }, { user }) {
    return authApi.signUp(user).then(res => {
      return Promise.resolve(res)
    })
  },
  signOut ({ commit }) {
    localStorage.clear('user')
    localStorage.clear('token')
    commit(types.SIGN_OUT)
  },
  userInfo ({ commit }, { id }) {
    return authApi.userInfo(id).then(res => {
      return Promise.resolve(res.body)
    })
  },
  updateUser ({ commit }, { user }) {
    return authApi.updateUser(user).then(res => {
      localStorage.setItem('user', JSON.stringify(res.body))
      return Promise.resolve(res)
    }).then(res => {
      commit(types.UPDATE_USER, { user: res.body })
      return Promise.resolve(res)
    })
  }
}

const mutations = {
  [types.SIGN_IN] (state, { user, token }) {
    state.user = user || {}
    state.token = token || ''
  },
  [types.SIGN_OUT] (state) {
    state.user = {}
    state.token = ''
  },
  [types.UPDATE_USER] (state, { user }) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

