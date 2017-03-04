const authVerification = require('../middlewares/auth-verification')

class RouterIndex {
  constructor(express) {
    this._router = express.Router();
    this._authRouter = express.Router();
    this._commonRouter = express.Router();
    /**
     * 路由编写
     */
    this._authRouter.use(authVerification);
    require('./users-account-router')(_router, _commonRouter, _authRouter);
  }

  // 资源路由
  router() {
    return this._router;
  }
  // 鉴权路由
  authRouter() {
    return this._authRouter;
  }
  // 普通路由
  commonRouter() {
    return this._commonRouter;
  }
}

module.exports = RouterIndex;