const Post = require("../models/post");

const listPosts = async () => {
  const posts = await Post.find().lean().exec();
  return posts;
};

const savePost = async (post) => {
  const newPost = new Post(post);
  await newPost.save();
  return newPost;
};

const getPost = async (id) => {
  const post = await Post.findById(id).lean().exec();
  return post;
};

const updatePost = async (id, post) => {
  const updatedPost = await Post.findByIdAndUpdate(id, post, {
    returnDocument: "after",
  })
    .lean()
    .exec();

  return updatedPost;
};

const deletePost = async (id) => {
  await Post.findByIdAndDelete(id).exec();
};

module.exports = {
  listPosts,
  savePost,
  getPost,
  updatePost,
  deletePost,
};
