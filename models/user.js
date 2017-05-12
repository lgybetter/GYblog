const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: { type: String, unique: true, required: true },
  phone: { type: String, unique: true },
  introduction: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createAt: { type: Date, default: Date.now() }, 
  starPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }], //收藏的文章
  thumbUpPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  sharePosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;