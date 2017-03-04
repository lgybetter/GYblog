const mongoose = require('mongoose');
const Posts = 'Posts';
const CURD = require('./curd-service');
const Promise = require('bluebird');

const createPost = (data) => {
  return new CURD(Posts).create(data);
}

const updatePost = (id, data) => {
  return new CURD(Posts).update({ _id: id }, data);
}

const removePost = (id) => {
  return new CURD(Posts).remove({ _id: id });
}

const queryPosts = () => {
  return new CURD(Posts).query({});
}

const findPost = (id) => {
  return new CURD(Posts).query({ _id: id }).then(post => {
    return Promise.resolve(post[0]);
  });
}

module.exports = {
  createPost,
  updatePost,
  removePost,
  queryPosts,
  findPost
}