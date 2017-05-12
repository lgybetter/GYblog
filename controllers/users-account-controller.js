import userAccountService from '../services/users-account-service'
import Promise from 'bluebird'
import jwt from 'jsonwebtoken'

/**
 * 用户登录
 * @param:
 *  email: 邮箱
 *  password: 口令
 */
exports.userLogIn = async (req, res, next) => {
  let data = req.query || {};
  console.log(data)
  try {
    let status = await userAccountService.verifyUser(data)
    res.json({status: status, success: true })
  } catch (err) {
    next(err)
  }
}

/**
 * 用户注册
 * @param:
 *  email: 邮箱
 *  name: 昵称
 *  password: 口令
 */
exports.userSignIn = async (req, res, next) => {
  let data = req.body || {};
  try {
    let user = await userAccountService.createUser(data)
    res.json({ user: user, success: true })
  } catch (err) {
    next(err)    
  }
}

/**
 * 用户信息更新
 * @param:
 *  phone: 手机号码
 */
exports.userUpdate = async (req, res, next) => {
  let data = req.body || {}
  let id = req.params.id || {}
  try {
    let status = await userAccountService.updateUser(id, data)
    res.json({ status: status, success: true })
  } catch (err) {
    next(err)    
  }
}

/**
 * 用户收藏文章
 * @param
 *  postId: 文章ID
 */
exports.starPost = async (req, res, next) => {
  let postId = req.params.id || {}
  let user = req.user
  try {
    let status = await userAccountService.starPost(postId, user._id)
    res.json( { status: status, success: true })
  } catch (err) {
    next(err)    
  }
}
