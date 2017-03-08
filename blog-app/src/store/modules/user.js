import auth from '../api/auth'

const state = {
  user: JSON.parse(localStorage.getItem('user')) || {}
}

const getters = {
  user: state => state.user
}

const actions = {
  signIn ({ commit }, { user }) {
    return auth.signIn(user).then(res => {
      console.log(res.body)
    })
  },
  signUp ({ commit }, { user }) {
    return auth.signUp(user).then(res => {
      console.log(res.body)
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

