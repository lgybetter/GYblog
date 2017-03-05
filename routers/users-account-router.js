

module.exports = (router, commonRouter, authRouter) => {
  commonRouter.get('/user', usersAccountController.userLogIn);
  commonRouter.post('/user', usersAccountController.userSignIn);
  authRouter.put('/user/:id', usersAccountController.userUpdate);
  authRouter.put('/user/star/:id', usersAccountController.starPost);
}