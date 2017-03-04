const mongoose = require('mongoose');
const Users = 'Users';
const nconf = require('nconf');
const CURD = require('./curd-service');
const Promise = require('bluebird');
const jwt = require('jsonwebtoken');

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

const verifyUser = (data) => {
  let email = data.email;
  let password = data.password;
  return new CURD(Users).query({ email: email }).then(user => {
    if(!user) {
      return Promise.reject({ code: 301, msg: 'user not sign in' });
    }
    if(user.password === password) {
      let token = jwt.sign({ 
        user: JSON.parse(JSON.stringify(user)), exp: Date.now() 
      }, nconf.get('secret'))
      return Promise.resolve({ 
        code: 200, 
        msg: 'login success', 
        user: user, 
        token: token 
      });
    } else {
      return Promise.resolve({ 
        code: 401, 
        msg: 'password uncorrect '
      });
    }
  });
}

module.exports = {
  createUser,
  removeUser,
  updateUser,
  queryUsers,
  findUser,
  verifyUser
}