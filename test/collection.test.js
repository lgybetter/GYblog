const config = require('./config');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'))
const assert = require('assert')

let token = null;
let id = null;
let collection = {};

describe('用户登录', () => {
  it('用户登陆成功', done => {
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


describe('用户收藏文章操作', () => {
  it('用户收藏文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/collection`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: {
        postId: '5916fe4afcf8c30c88a6dbc4'
      },
      json: true
    }
    request.postAsync(option).then(res => {
      collection = res.body
      assert(res.body.id != null)
    }).then(done, done)
  })

  it('查找所收藏的文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/collection`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      json: true
    }
    request.getAsync(option).then(res => {
      assert(res.body.count > 0)      
    }).then(done, done)
  })

  it('取消收藏文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/collection/${collection.id}`,
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