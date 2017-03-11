import post from '../api/post'
import * as types from '../mutation-types'

const state = {
  posts: []
}

const getters = {
  posts: state => state.posts
}

const actions = {
  [types.QUERY_POSTS] ({ commit }, { user }) {
    return post.queryPosts(user).then(res => {
      return Promise.resolve(res.body)
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
