const usersAccountController = require('../controllers/users-account-controller');

module.exports = (router, commonRouter, authRouter) => {
  commonRouter.get('/user', usersAccountController.userLogIn); //用户登录
  commonRouter.post('/user', usersAccountController.userSignIn); //用户注册
  authRouter.put('/user/:id', usersAccountController.userUpdate); //用户修改信息
  authRouter.put('/user/star/:id', usersAccountController.starPost); //用户收藏文章
}