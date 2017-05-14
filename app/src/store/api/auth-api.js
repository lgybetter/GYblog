import Vue from 'vue'
import config from '../config'

export default {
  signUp (user) {
    return Vue.http.post(`${config.commonUrl}/user`, user, config.options)
  },
  signIn (user) {
    return Vue.http.get(`${config.commonUrl}/user/?email=${user.email}&password=${user.password}`)
  }
}
