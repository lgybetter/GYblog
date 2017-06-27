import * as types from '../mutation-types'
import resourceApi from '../api/resource-api'
import moment from 'moment'

const state = {
  posts: {
    objects: [],
    count: 0
  },
  post: {
    createBy: {
      name: ''
    }
  },
  collections: {
    objects: [],
    count: 0
  }
}

const actions = {
  getResource ({ commit }, { url, id }) {
    return resourceApi.getResource({ url, id }).then(data => {
      commit(types.RESOURCE_SINGLE_DATA, { url, data })
      return Promise.resolve(data || {})
    })
  },
  queryResource ({ commit }, { url, args }) {
    return resourceApi.queryResource({ url, args }).then(data => {
      commit(types.RESOURCE_DATA, { url, data })
      return Promise.resolve(data || {})
    })
  },
  postResource ({ commit }, { url, data }) {
    return resourceApi.postResource({ url, data }).then(data => {
      return Promise.resolve(data || {})
    })
  },
  putResource ({ commit }, { url, id, data }) {
    return resourceApi.putResource({ url, id, data }).then(data => {
      return Promise.resolve(data || {})
    })
  },
  deleteResource ({ commit }, { url, id }) {
    return resourceApi.deleteResource({ url, id }).then(data => {
      return Promise.resolve(data || {})
    })
  }
}

const getters = {
  posts: state => state.posts,
  post: state => state.post,
  collections: state => state.collections
}

const mutations = {
  [types.RESOURCE_DATA] (state, { url, data }) {
    if (data.objects) {
      data.objects.forEach(doc => {
        if (doc.date) {
          doc.date = moment(doc.date).format('YYYY-MM-DD HH:mm:ss')
        }
      })
    }
    state[url + 's'] = data
  },
  [types.RESOURCE_SINGLE_DATA] (state, { url, data }) {
    if (data.date) {
      data.date = moment(data.date).format('YYYY-MM-DD HH:mm:ss')
    }
    state[url] = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
