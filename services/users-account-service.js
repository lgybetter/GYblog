const mongoose = require('mongoose');
const Users = 'Users';
const CURD = require('./curd-service');
const Promise = require('bluebird');

const createUser = (data) => {
  return new CURD(Users).create(data);
}

const removeUser = (id) => {
  return new CURD(Users).remove({ _id: id });
}

const updateUser = (id, data) => {
  return new CURD(Users).update({_id: id }, data);
}

const queryUsers = () => {
  return new CURD(Users).query({});
}

const findUser = (id) => {
  return new CURD(Users).findOne({ _id: id });
}

const starPost = (postId, user) => {
  return new CURD(Users).findOne(user).then(user => {
    user.starPost.push(postId);
    return user.save();
  });
}

module.exports = {
  createUser,
  removeUser,
  updateUser,
  queryUsers,
<<<<<<< HEAD
  findUser
=======
  findUser,
  verifyUser,
  starPost
>>>>>>> finish the post controller
}