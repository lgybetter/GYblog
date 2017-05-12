const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  title: { type: String, require: true },
  createBy: { type: Schema.Types.ObjectId, ref: 'Users' },
  postId: { type: Schema.Types.ObjectId, ref: 'Post'},
  createAt: { type: Date, default: Date.now }
});

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;
