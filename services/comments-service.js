const mongoose = require('mongoose');
const Comments = 'Comments';
const CURD = require('./curd-service');
const Promise = require('bluebird');
const usersAccountService = require('./users-account-service');
const postService = require('./posts-service');

const addComment = (postId, fromUser, comment) => {
  let _post = {};
  return postService.findPost(postId, fromUser).then(post => {
    _post = post;
    if(post.comments.length) {
      post.comments.forEach(comment => {
        if(comment.from == fromUser) {
          return Promise.reject({ code: 202, msg: 'already have comment'});
        }
      });
    }
    return new CURD(Comments).create(Object.assign(comment, { 
      from: fromUser 
    }));
  }).then(comment => {
    _post.comments.push(comment._id);
    return _post.save();
  });
}

const removeComment = () => {
  
}