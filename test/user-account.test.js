const config = require('./config');
const Promise = require('bluebird');
const request = require('request');
const expect = require('chai').expect;

let token = null;
let id = null;

describe('用户注册', () => {
  it('用户注册成功', done => {
    let option = {
      url: `${config.baseUrl}/api/user`,
      body: {
        email: '437675103@qq.com',
        name: 'lgybetter',
        password: 'lgy'
      },
      json: true
    }
    request.post(option, (err, res, body) => {
      expect(err).to.be.equal(null);
      expect(res.statusCode).to.be.equal(200);
      expect(body.success).to.be.equal(true);
      done();
    });
  });
});

describe('用户登录', () => {
  it('用户登陆成功', done => {
    let option = {
      url: `${config.baseUrl}/api/user?email=437675103@qq.com&password=lgy`,
      json: true
    }
    request.get(option, (err, res, body) => {
      expect(err).to.be.equal(null);
      expect(res.statusCode).to.be.equal(200);
      expect(body.success).to.be.equal(true);
      token = body.status.token;
      id = body.status.user._id;
      done();
    })
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
    request.put(option, (err, res, body) => {
      expect(err).to.be.equal(null);
      expect(res.statusCode).to.be.equal(200);
      expect(body.success).to.be.equal(true);
      done();
    })
  })
})