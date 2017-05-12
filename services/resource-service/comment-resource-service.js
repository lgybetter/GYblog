import BaseResource from './base-resource-service'
import mongoose from 'mongoose'
const Post = mongoose.model('Post')

class CommontResource extends BaseResource {
  query ({ user }) {
    this.filters = this.filters || {}
    if (!body.postId) {
      throw new Error({ code: 400, msg: 'required postId', level: 'error' })       
    }
    this.filters = Object.assign(this.filters, { postId: body.postId })
    this.listQuery = this.Model.find(this.filters).select(this.selectField).populate({ path: 'tags comments' }).select(this.selectField).limit(this.limit).skip(this.skip).sort(this.sort)
  }
  
  async create ({ body, user }) {
    let data = body
    if (!data.postId) {
      throw new Error({ code: 400, msg: 'required postId', level: 'error' })       
    }
    let _post = await Post.findOne({ createBy: user._id, postId: data.postId })
    if (_post) {
      throw new Error({ code: 400, msg: 'have commented', level: 'error' })       
    }
    data.createBy = user._id
    let entity = new this.Model(data)
    try {
      await entity.save()
      return this._mongoIdToWebId(entity)
    } catch (err) {
      throw new Error({ code: 500, msg: err, level: 'error' }) 
    }
  }
  
  // 删除实例
  async findByIdAndRemove({ params, query, user }) {
    let id = params.id 
    this.queryParams({ query, user })     
    try {
      let entity = await this.Model.findOneAndUpdate({ _id: id, createBy: user._id }).select(this.selectField) 
      if (!entity) {
        throw new Error('not found') 
      }
      return this._mongoIdToWebId(entity) 
    } catch (err) {
      throw new Error({ code: 500, msg: err, level: 'error' }) 
    }
  }

  // 更新实例
  async findByIdAndUpdate({ params, body, query, user }) {
    let id = params.id
    let data = body
    this.queryParams({ query, user })
    try {
      let entity = await this.Model.findOneAndUpdate({ _id: id, createBy: user._id }, data).select(this.selectField) 
      if (!entity) {
        throw new Error('not found') 
      }
      return this._mongoIdToWebId(entity)
    } catch (err) {
      throw new Error({ code: 500, msg: err, level: 'error' }) 
    }
  }
}

export default PostResource