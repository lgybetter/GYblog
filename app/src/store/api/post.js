import Vue from 'vue'
import config from '../config'

export default {
  queryPosts (user) {
    return Vue.http.get(`${config.authUrl}/posts`, config.tokenOptions(user.token))
  }
}
