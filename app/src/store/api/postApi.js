import Vue from 'vue'
import config from '../config'

export default {
  queryPosts (user) {
    return Vue.http.get(`${config.authUrl}/posts/search`, config.tokenOptions(user.token))
  },
  postEvents (user, post, event) {
    return Vue.http.put(`${config.authUrl}/post/event/${post._id}`, { event: event }, config.tokenOptions(user.token))
  }
}
