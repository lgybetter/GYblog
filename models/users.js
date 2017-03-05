const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: { type: String, unique: true, required: true },
  phone: { type: String, unique: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createAt: { type: Date, default: Date.now() }, 
  starPost: [{ type: Schema.Types.ObjectId, ref: 'Posts' }] //收藏的文章
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;