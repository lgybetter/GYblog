const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  createBy: { type: Schema.Types.ObjectId, ref: 'Users' },
  createAt: { type: Date, default: Date.now },
  content: { type: String, required: true },
  open: { type: Boolean, required: true },
  summary: { type: String },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tags' }],
  starCount: { type: Number, default: 0 },
  shareCount: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0},
  thumbUpCount: { type: Number, default: 0 }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;