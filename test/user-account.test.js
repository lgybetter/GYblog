const config = require('./config')
const Promise = require('bluebird')
const expect = require('chai').expect
const request = Promise.promisifyAll(require('request'))

let token = null;
let id = null;

describe('用户注册', () => {
  it('用户注册成功', done => {
    let option = {
      url: `${config.baseUrl}/api/user`,
      body: {
        email: '437675103@qq.com',
        name: 'lgybetter',
        password: '123'
      },
      json: true
    }
    request.postAsync(option).then(res => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body.success).to.be.equal(true);
    }).then(done, done)
  });
});

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

describe('用户信息更新', () => {
  it('用户信息更新成功', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/user/${id}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: {
        phone: '15521132074'
      },
      json: true
    }
    request.putAsync(option).then(res => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body.success).to.be.equal(true);
    }).then(done, done)
  })
})