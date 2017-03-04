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
  return new CURD(Users).query({ _id: id }).then(user => {
    return Promise.resolve(user[0]);
  });
}

module.exports = {
  createUser,
  removeUser,
  updateUser,
  queryUsers,
  findUser
}