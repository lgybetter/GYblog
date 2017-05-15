import Vue from 'vue'
import config from '../config'

export default {
  getResource ({ url, id }) {
    return Vue.http.get(`${config.authUrl}/${url}/${id}`, config.options).then(res => res.body)
  },
  queryResource ({ url, args }) {
    console.log(args)
    let requestUrl = `${config.authUrl}/${url}?`
    if (args._page) {
      requestUrl += `_page=${args._page}&`
    }
    if (args._perPage) {
      requestUrl += `_perPage=${args._perPage}&`
    }
    if (args._select) {
      requestUrl += `_select=${args._select}&`
    }
    if (args._sortField) {
      requestUrl += `_sortField=${args._sortField}&`
    }
    if (args._sortDir) {
      requestUrl += `_sortDir=${args._sortDir}&`
    }
    if (args._filters) {
      requestUrl += `_filters=${encodeURI(JSON.stringify(args._filters))}`
    }
    return Vue.http.get(requestUrl, config.options).then(res => res.body)
  },
  postResource ({ url, data }) {
    return Vue.http.post(`${config.authUrl}/${url}`, data, config.options).then(res => res.body)
  },
  putResource ({ url, id, data }) {
    return Vue.http.put(`${config.authUrl}/${url}/${id}`, data, config.options).then(res => res.body)
  },
  deleteResource ({ url, id }) {
    return Vue.http.delete(`${config.authUrl}/${url}/${id}`, config.options).then(res => res.bdoy)
  }
}
