const config = require('./config');
const Promise = require('bluebird');
const expect = require('chai').expect;
const request = Promise.promisifyAll(require('request'))
const assert = require('assert')

let token = null;
let id = null;
let posts = [];

describe('用户登录', () => {
  it('用户登陆成功', done => {
    let option = {
      url: `${config.baseUrl}/api/user?email=437675103@qq.com&password=123`,
      json: true
    }
    request.getAsync(option).then(res => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body.success).to.be.equal(true);
      token = res.body.status.token;
      id = res.body.status.user._id;
    }).then(done, done)
  })
});


describe('用户文章操作', () => {
  it('用户发表文章成功', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/post`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: {
        title: 'test',
        open: true,
        content: 'test'
      },
      json: true
    }
    request.postAsync(option).then(res => {
      assert(res.body.id != null)
    }).then(done, done)
  })

  it('查找所属文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/post`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      json: true
    }
    request.getAsync(option).then(res => {
      posts = res.body.objects
      assert(res.body.count > 0)      
    }).then(done, done)
  })
  it('根据id查看文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/post/${posts[0].id}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      json: true
    }
    request.getAsync(option).then(res => {
      assert(res.body.id != null)
    }).then(done, done)
  })
  it('根据id修改文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/post/${posts[0].id}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: {
        title: 'test2',
        open: false,
        content: 'test2'
      },
      json: true
    }
    request.putAsync(option).then(res => {
      assert(res.body.id != null)
    }).then(done, done)
  })
  it('根据id删除文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/post/${posts[0].id}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      json: true
    }
    request.deleteAsync(option).then(res => {
      assert(res.body.id != null)
    }).then(done, done)
  })
})