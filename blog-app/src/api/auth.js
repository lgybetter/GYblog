import Vue from 'vue'
import config from '../store/config'

export default {
  signUp (user) {
    return Vue.http.post(`${config.baseUrl}/user`, user, config.options)
  },
  signIn (user) {
    return Vue.http.get(`${config.baseUrl}/user/?email=${user.email}&password=${user.password}`)
  }
}
