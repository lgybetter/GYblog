import mongoose from 'mongoose'
const Post = mongoose.model('Post')
const User = mongoose.model('Users')

// 添加收藏
const addCollection = async ({ userId, postId }) => {
  let post = await Post.findByIdAndUpdate(postId, {})
  let user = await User.findByIdAndUpdate(userId, {})
}