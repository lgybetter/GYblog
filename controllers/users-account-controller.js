const userAccountService = require('../services/users-account-service');
const Promise = require('bluebird');
const co = require('co');
const jwt = require('jsonwebtoken');

/**
 * 用户登录
 * @param:
 *  email: 邮箱
 *  password: 口令
 */
exports.userLogIn = (req, res, next) => {
  let data = req.query || {};
  co(function* () {
    let status = yield userAccountService.verifyUser(data).catch(err => {
      next(err);
    });
    res.json({status: status, success: true });
  });
}

/**
 * 用户注册
 * @param:
 *  email: 邮箱
 *  name: 昵称
 *  password: 口令
 */
exports.userSignIn = (req, res, next) => {
  let data = req.body || {};
  co(function* () {
    let user = yield userAccountService.createUser(data).catch(err => {
      next(err);
    });
    res.json({ user: user, success: true });
  });
}

/**
 * 用户信息更新
 * @param:
 *  phone: 手机号码
 */
exports.userUpdate = (req, res, next) => {
  let data = req.body || {};
  let id = req.params.id || {};
  co(function* () {
    let status = yield userAccountService.updateUser({ _id: id }, data).catch(err => {
      next(err);
    });
    res.json({ status: status, success: true });
  });
}