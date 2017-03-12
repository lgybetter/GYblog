const mongoose = require('mongoose')
const Posts = mongoose.model('Posts')
const Users = mongoose.model('Users')
const markdown = require('markdown').markdown
const Promise = require('bluebird')

/**
 * 用户发表文章
 */
const createPost = (data) => {
  //把内容转换为MD格式
  data.content = markdown.toHTML(data.content, 'Maruku')
  return new Posts(data).save()
}

/**
 * 用户修改文章
 */
const updatePost = (id, user, data) => {
  return Posts.update({ 
    _id: id,
    createBy: user._id
  }, data)
}

/**
 * 用户删除文章
 */
const removePost = (id, user) => {
  return Posts.remove({ _id: id, user: user._id })
}

/**
 * 用户获取文章
 */
const queryPosts = (filter, sort, skip) => {
  return Posts.find(Object.assign(filter)).populate({
    'path': 'tags comments'
  }).skip(skip).sort(sort)
}

/**
 * 用户查找单篇文章
 */
const findPost = (id, user) => {
  return Posts.findOne({
    _id: id,
    createBy: user._id
  }).populate({
    'path': 'tags comments'
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
        let update = {}
        update['$inc'] = {}
        update['$inc'][countEvent] = 1
        return Posts.findOneAndUpdate({ 
          _id: id
        }, update).then(() => {
          let update = {}
          update['$addToSet'] = {}
          update['$addToSet'][postEvent] = id
          return Users.findOneAndUpdate({ _id: user._id}, update)
        })
      } else if(method === 'DELETE') {
        let update = {}
        update['$inc'] = {}
        update['$inc'][countEvent] = -1
        return Posts.findOneAndUpdate({
          _id: id
        }, update).then(() => {
          let update = {}
          update['$pull'] = {}
          update['$pull'][postEvent] = id
          return Users.findOneAndUpdate({ _id: user._id }, update)
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