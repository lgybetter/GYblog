const config = require('./config');
const Promise = require('bluebird');
const request = require('request');
const expect = require('chai').expect;

let token = null;
let id = null;
let posts = [];

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


describe('用户发布文章', () => {
  it('用户发表文章成功', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/post`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: {
        title: 'test',
        open: true,
        createBy: id,
        content: 'test'
      },
      json: true
    }
    request.post(option, (err, res, body) => {
      expect(err).to.be.equal(null);
      expect(res.statusCode).to.be.equal(200);
      expect(body.success).to.be.equal(true);
      done();
    })
  })
})

describe('用户查找文章', () => {
  it('查找所属文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/posts`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      json: true
    }
    request.get(option, (err, res, body) => {
      expect(err).to.be.equal(null);
      expect(res.statusCode).to.be.equal(200);
      expect(body.success).to.be.equal(true);
      posts = body.posts;
      done();
    })
  })
  it('用户可查看文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/posts/search`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      json: true
    }
    request.get(option, (err, res, body) => {
      expect(err).to.be.equal(null);
      expect(res.statusCode).to.be.equal(200);
      expect(body.success).to.be.equal(true);
      done();
    })
  })
  it('根据id查看文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/post/${posts[0]._id}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      json: true
    }
    request.get(option, (err, res, body) => {
      expect(err).to.be.equal(null);
      expect(res.statusCode).to.be.equal(200);
      expect(body.success).to.be.equal(true);
      done();
    })
  })
  it('根据id删除文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/post/${posts[0]._id}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      json: true
    }
    request.del(option, (err, res, body) => {
      expect(err).to.be.equal(null);
      expect(res.statusCode).to.be.equal(200);
      expect(body.success).to.be.equal(true);
      done();
    })
  })
    it('根据id修改文章', done => {
    let option = {
      url: `${config.baseUrl}/api/auth/post/${posts[0]._id}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: {
        title: 'test2',
        open: false,
        createBy: id,
        content: 'test2',
      },
      json: true
    }
    request.del(option, (err, res, body) => {
      expect(err).to.be.equal(null);
      expect(res.statusCode).to.be.equal(200);
      expect(body.success).to.be.equal(true);
      done();
    })
  })
})