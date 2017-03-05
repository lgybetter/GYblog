const mongoose = require('mongoose');
const Posts = 'Posts';
const CURD = require('./curd-service');
const Promise = require('bluebird');

const createPost = (data) => {
  return new CURD(Posts).create(data);
}

const updatePost = (id, user, data) => {
  return new CURD(Posts).update({ 
    _id: id,
    createBy: user._id
  }, data);
}

const removePost = (id, user) => {
  return new CURD(Posts).remove({ _id: id, user: user._id });
}

const queryPosts = (filter, sort, skip) => {
  return new CURD(Posts).query(Object.assign(filter)).skip(skip).sort(sort);
}

const findPost = (id, user) => {
  return new CURD(Posts).findOne({
    _id: id,
  }).then(post => {
    if(post.createBy === user._id) {
      return Promise.resolve(post)
    } else if(post.open) {
      return Promise.resolve(post)
    } else {
      return Promise.reject( {code: 401, msg: 'not access' });
    }
  })
}

module.exports = {
  createPost,
  updatePost,
  removePost,
  queryPosts,
  findPost
}