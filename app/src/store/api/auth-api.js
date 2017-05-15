import Vue from 'vue'
import config from '../config'

export default {
  signUp (user) {
    return Vue.http.post(`${config.commonUrl}/user`, user, config.options)
  },
  signIn (user) {
    return Vue.http.get(`${config.commonUrl}/user/?email=${user.email}&password=${user.password}`)
  },
  updateUser (user) {
    return Vue.http.put(`${config.authUrl}/user`, user, config.options)
  },
  userInfo (id) {
    return Vue.http.get(`${config.authUrl}/user/${id}`, config.options)
  }
}
