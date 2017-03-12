const mongoose = require('mongoose')
const Users = mongoose.model('Users')
const nconf = require('nconf')
const Promise = require('bluebird')
const jwt = require('jsonwebtoken')

const createUser = (data) => {
  return new Users(data).save()
}

const removeUser = (id) => {
  return Users.remove({ _id: id })
}

const updateUser = (id, data) => {
  return Users.update({_id: id }, data)
}

const queryUsers = () => {
  return Users.find({})
}

const findUser = (id) => {
  return Users.findOne({ _id: id })
}

const verifyUser = (data) => {
  let email = data.email;
  let password = data.password;
  return Users.findOne({ email: email }).then(user => {
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