const config = require('./config');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'))
const assert = require('assert')

let token = null;
let id = null;
let comment = {};

describe('用户登录', () => {
  it.only('用户登陆成功', done => {
    let option = {
      url: `${config.baseUrl}/api/user?email=437675103@qq.com&password=123`,
      json: true
    }
    request.getAsync(option).then(res => {
      token = res.body.status.token;
      id = res.body.status.user._id;
      assert(res.body.status.user._id != null)
    }).then(done, done)
  })
});


describe('用户评论文章操作', () => {
  it.only('用户评论文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/comment`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: {
        postId: '5916fe4afcf8c30c88a6dbc4',
        content: '该系统存在漏洞'
      },
      json: true
    }
    request.postAsync(option).then(res => {
      comment = res.body
      assert(res.body.id != null)
    }).then(done, done)
  })

  it.only('查找文章的所有评论', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/comment`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      qs: {
        postId: '5916fe4afcf8c30c88a6dbc4'
      },
      json: true
    }
    request.getAsync(option).then(res => {
      assert(res.body.count > 0)
    }).then(done, done)
  })

  it.only('更新对文章的评论', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/comment/${comment.id}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: {
        postId: '5916fe4afcf8c30c88a6dbc4',
        content: '该系统没有漏洞了'
      },
      json: true
    }
    request.putAsync(option).then(res => {
      assert(res.body.id != null)
    }).then(done, done)
  })

  it.only('删除对文章的评论', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/comment/${comment.id}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: {
        postId: '5916fe4afcf8c30c88a6dbc4'
      },
      json: true
    }
    request.deleteAsync(option).then(res => {
      assert(res.body.id != null)
    }).then(done, done)
  })
})