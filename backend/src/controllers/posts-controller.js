const postsService = require("../services/posts-service");

const listPosts = async (req, res) => {
  try {
    const posts = await postsService.listPosts();
    res.setHeader("Total", posts.length);
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Error" });
  }
};

const savePost = async (req, res, next) => {
  const post = req.body;
  try {
    const savedPost = await postsService.savePost(post);
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};

const getPost = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await postsService.getPost(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const newPostInfo = req.body;

  try {
    const updatedPost = await postsService.updatePost(id, newPostInfo);

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  const { id } = req.params;

  try {
    await postsService.deletePost(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listPosts,
  getPost,
  savePost,
  updatePost,
  deletePost,
};
