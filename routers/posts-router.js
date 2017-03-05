const postsController = require('../controllers/posts-controller');

module.exports = (router, commonRouter, authRouter) => {
  authRouter.get('/posts', postsController.getPosts);
  authRouter.get('/post/:id', postsController.getPostById);
  authRouter.get('/posts/search', postsController.viewAllPosts);
  authRouter.post('/post', postsController.createPost);
  authRouter.put('/post/:id', postsController.updatePost);
  authRouter.delete('/post/:id', postsController.removePost);
}