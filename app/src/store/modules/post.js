import postApi from '../api/postApi'
import * as types from '../mutation-types'

const state = {
  posts: []
}

const getters = {
  posts: state => state.posts
}

const actions = {
  [types.QUERY_POSTS] ({ commit }, { user }) {
    return postApi.queryPosts(user).then(res => {
      commit(types.QUERY_POSTS, { posts: res.body.posts })
      return Promise.resolve(res.body)
    })
  },
  [types.POST_EVENTS] ({ commit }, { user, post, event, index }) {
    return postApi.postEvents(user, post, event).then(res => {
      commit(types.POST_EVENTS, { event, index })
      return Promise.resolve(res.body)
    })
  }
}

const mutations = {
  [types.QUERY_POSTS] (state, { posts }) {
    state.posts = posts || []
  },
  [types.POST_EVENTS] (state, { event, index }) {
    console.log(index)
    console.log(`${event}Count`)
    state.posts[index][`${event}Count`] ++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
