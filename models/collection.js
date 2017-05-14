import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  createBy: { type: Schema.Types.ObjectId, ref: 'Users' },
  postId: { type: Schema.Types.ObjectId, ref: 'Post'},
  createAt: { type: Date, default: Date.now }
})

const Collection = mongoose.model('Collection', CollectionSchema)

export default Collection
