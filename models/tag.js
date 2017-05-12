const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagsSchema = new Schema({
  name: { type: String, required: true }
})

const Tags = mongoose.model('Tags', TagsSchema);

module.exports = Tags;