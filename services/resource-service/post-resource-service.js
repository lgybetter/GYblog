import BaseResource from './base-resource-service'

class PostResource extends BaseResource {
  query () {
    this.filters = this.filters || {}
    this.filters = Object.assign(this.filters, { open: true })
    this.listQuery = this.Model.find(this.filters).select(this.selectField).populate({ path: 'tags comments' }).select(this.selectField).limit(this.limit).skip(this.skip).sort(this.sort)
  }
  // async create ({ body, user }) {
  //   let data = body
  // }
}

export default PostResource