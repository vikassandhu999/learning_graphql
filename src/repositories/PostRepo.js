const Post = require('../models/Post.model');

async function createPost(post) {
  const { title, description } = post;
  const newPost = new Post({ title, description });
  await newPost.save();
  return newPost;
}

async function deletePost(id) {
  await Post.findByIdAndDelete(id);
  return 'Deleted';
}

async function getAllPosts() {
  return Post.find();
}

async function getPost(id) {
  return Post.findById(id);
}

async function updatePost(id, post) {
  const { title, description } = post;
  return Post.findByIdAndUpdate(id, {
    title,
    description,
  }, { new: true });
}

const PostRepo = {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
};

module.exports = PostRepo;
