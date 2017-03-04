const config = require('./config');
const Promise = require('bluebird');
const request = require('request');
const expect = require('chai').expect;

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
      url: ``
    }
  })
})
