const postService = require('../services/posts-service');
const Promise = require('bluebird');
const co = require('co');

/**
 * 根据id获取文章
 */
exports.getPostById = (req, res, next) => {
  let id = req.params.id || '';
  let user = req.user;
  co(function* () {
    let post = yield postService.findPost(id, user).catch(err => {
      next(err);
    });
    res.json({ post: post, success: true });
  })
}

/**
 * 获取用户发表的文章
 */
exports.getPosts = (req, res, next) => {
  let user = req.user || {};
  let filter = req.query.filter || {};
  let sort = req.query.sort || {};
  let perPage = req.query.perPage || 10;
  let page = req.query.page || 1;
  let skip = parseInt((page - 1) * perPage);
  filter = Object.assign(filter, { createBy: user._id });
  co(function* () {
    let posts = yield postService.queryPosts(filter, sort, skip).catch(err => {
      next(err);
    });
    res.json({ posts: posts, success: true });
  })
}

/**
 * 获取用户可查看的文章
 */
exports.viewAllPosts = (req, res, next) => {
  let user = req.user || {};
  let filter = req.query.filter || {};
  let sort = req.query.sort || {};
  let perPage = req.query.perPage || 10;
  let page = req.query.page || 1;
  let skip = parseInt((page - 1) * perPage);
  filter = Object.assign(filter, { open: true });
  co(function* () {
    let posts = yield postService.queryPosts(filter, sort, skip).catch(err => {
      next(err)
    });
    res.json({ posts: posts, success: true })
  })
}

/**
 * 发布新文章
 */
exports.createPost = (req, res, next) => {
  let user = req.user || {};
  let data = req.body || {};
  co(function* () {
    let post = yield postService.createPost({
      title: data.title,
      open: data.open,
      createBy: user._id,
      content: data.content,
      tags: data.tags //标签id类型
    }).catch(err => {
      next(err);
    });
    res.json({ post: post, success: true });
  });
}

/**
 * 根据id修改文章
 */
exports.updatePost = (req, res, next) => {
  let id = req.params.id || '';
  let user = req.user || {};
  let data = req.body || {};
  co(function* () {
    let status = yield postService.updatePost(id, user, data).catch(err => {
      next(err);
    });
    res.json({ status: status, success: true });
  });
}

/**
 * 根据id删除文章
 */
exports.removePost = (req, res, next) => {
  let id = req.params.id || ''
  let user = req.user || {}
  co(function* () {
    let status = yield postService.removePost(id, user).catch(err => {
      next(err)
    })
    res.json({ status: status, success: true })
  })
}

/**
 * 用户操作文章事件
 */
exports.postEvents = (req, res, next) => {
  let event = req.query.event || ''
  let id = req.params.id || ''
  let user = req.user || {};
  co(function* () {
      yield postService.postEvents(id, user, event, req.method)
  })
}