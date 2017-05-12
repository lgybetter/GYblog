const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  title: { type: String, require: true },
  from: { type: Schema.Types.ObjectId, ref: 'Users' },
  createAt: { type: Date, default: Date.now }
});

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;
