const mongoose = require('mongoose');
const Posts = 'Posts';
const Users = 'Users';
const markdown = require('markdown').markdown;
const CURD = require('./curd-service');
const Promise = require('bluebird');

/**
 * 用户发表文章
 */
const createPost = (data) => {
  //把内容转换为MD格式
  data.content = markdown.toHTML(data.content, 'Maruku');
  return new CURD(Posts).create(data);
}

/**
 * 用户修改文章
 */
const updatePost = (id, user, data) => {
  return new CURD(Posts).update({ 
    _id: id,
    createBy: user._id
  }, data);
}

/**
 * 用户删除文章
 */
const removePost = (id, user) => {
  return new CURD(Posts).remove({ _id: id, user: user._id });
}

/**
 * 用户获取文章
 */
const queryPosts = (filter, sort, skip) => {
  return new CURD(Posts).query(Object.assign(filter)).populate({
    'path': 'tags comments'
  }).skip(skip).sort(sort);
}

/**
 * 用户查找单篇文章
 */
const findPost = (id, user) => {
  return new CURD(Posts).findOne({
    _id: id
  }).populate({
    'path': 'tags comments'
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

/**
 * 用户评论，收藏，分享，点赞文章事件
 * @param 
 *  id: 文章的id
 *  user: 当前的用户
 *  event: 对文章的操作事件: addComments, star, share, thumbUp
 *  type: 对文章操作事件的类型: add, remove
 *  method: 对文章操作事件的类型: PUT, DELETE
 */
const postEvents = (id, user, event, method) => {
  switch(event) {
    case 'comments':
      return Promise.resolve()
    case 'star':
    case 'share':
    case 'thumbUp':
      let countEvent = `${event}Count`
      let postEvent = '${event}Posts'
      if(method === 'PUT') {
        return new CURD(Posts).update({ 
          _id: id
        }, {
          $inc: { 
            countEvent: 1
          }
        }).then(() => {
          return new CURD(Users).update({ _id: user._id}, {
            $addToSet: {
              postEvent: id
            }
          })
        })
      } else if(method === 'DELETE') {
        return new CURD(Posts).update({
          _id: id
        }, {
          $inc: {
            countEvent: 1
          }
        }).then(() => {
          return new CURD(Users).update({ _id: user._id }, {
            $pull: {
              postEvent: id
            }
          })
        })
      } else {
        return Promise.reject({code: 400, msg: 'operation fail'})
      }
    default:
      return Promise.reject({code: 400, msg: 'operation fail'})
  }
}

module.exports = {
  createPost,
  updatePost,
  removePost,
  queryPosts,
  findPost,
  postEvents
}