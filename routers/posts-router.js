const postsController = require('../controllers/posts-controller');

module.exports = (router, commonRouter, authRouter) => {
  authRouter.get('/posts', postsController.getPosts); //获取用户个人文章
  authRouter.get('/post/:id', postsController.getPostById); //根据获取文章
  authRouter.get('/posts/search', postsController.viewAllPosts); //根据过滤搜索文章
  authRouter.post('/post', postsController.createPost); //用户发布文章
  authRouter.put('/post/:id', postsController.updatePost); //用户修改文章
  authRouter.delete('/post/:id', postsController.removePost); //用户删除文章 
  authRouter.use('/post/event/:id', postsController.postEvents); //用户操作文章事件
}