let posts = [
  {
    _id: "1",
    title: "My first post",
    body: "My frist post body",
    imageUrl:
      "https://assets.afcdn.com/story/20130522/31922_w767h767c1cx298cy375.jpg",
    author: "Mike",
    comments: [],
    cretedAt: new Date(),
    updatedAt: new Date(),
  },
];

const listPosts = (req, res) => {
  res.setHeader("Total", posts.length);
  res.json(posts);
};

const getPost = (req, res) => {
  const { id } = req.params;

  const post = posts.find((post) => post._id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send();
  }
};

const savePost = (req, res) => {
  const post = req.body;

  post._id = `${posts.length + 1}`;
  posts.push(post);

  res.status(201).json(post);
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const newPostInfo = req.body;

  const postIndex = posts.findIndex((post) => post._id === id);

  if (postIndex === -1) {
    return res.status(404).send();
  }

  const updatedPost = {
    ...posts[postIndex],
    ...newPostInfo,
    updatedAt: new Date(),
  };
  posts[postIndex] = updatedPost;

  res.json(updatedPost);
};

const deletePost = (req, res) => {
  const { id } = req.params;

  const postIndex = posts.findIndex((post) => post._id === id);

  if (postIndex === -1) {
    return res.status(404).send();
  }

  posts.splice(postIndex, 1);

  res.status(204).send();
};

module.exports = {
  listPosts,
  getPost,
  savePost,
  updatePost,
  deletePost,
};
