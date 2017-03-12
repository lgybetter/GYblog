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
      commit(types.QUERY_POSTS, { posts: res.body.posts })
      return Promise.resolve(res.body)
    })
  }
}

const mutations = {
  [types.QUERY_POSTS] (state, { posts }) {
    state.posts = posts || []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
