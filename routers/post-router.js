import ResourceCtrl from '../controllers/resource-controller'
import express from 'express'

module.exports = (router, commonRouter, authRouter) => {
  authRouter.use(new ResourceCtrl('post', 'Post').routers())
}