import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TagsSchema = new Schema({
  name: { type: String, required: true }
})

const Tags = mongoose.model('Tags', TagsSchema)

export default Tags