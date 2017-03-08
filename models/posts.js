const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  title: { type: String, required: true },
  createBy: { type: Schema.Types.ObjectId, ref: 'Users' },
  createAt: { type: Date, default: Date.now },
  content: { type: String, required: true },
  open: { type: Boolean, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tags' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
});

const Posts = mongoose.model('Posts', PostsSchema);

module.exports = Posts;