const Post = require("../models/post");

const listComments = async (id) => {
  const post = await Post.findById(id).lean().exec();
  return post?.comments;
};

const saveComment = async (id, comment) => {
  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { $addToSet: { comments: comment } },
    { returnDocument: "after" }
  )
    .lean()
    .exec();

  if (!updatedPost) {
    return;
  }

  const comments = updatedPost.comments;

  return comments[comments.length - 1];
};

const updateComment = async (id, commentId, comment) => {
  const updatedPost = await Post.findOneAndUpdate(
    { _id: id, "comments._id": commentId },
    {
      $set: {
        "comments.$.author": comment.author,
        "comments.$.comment": comment.comment,
      },
    },
    { returnDocument: "after" }
  );

  if (!updatedPost) {
    return;
  }

  const updatedComment = updatedPost.comments.find(
    (comment) => comment._id.toString() === commentId
  );

  return updatedComment;
};

const deleteComment = async (id, commentId) => {
  await Post.findOneAndUpdate(
    { _id: id },
    { $pull: { comments: { _id: commentId } } }
  );
};

module.exports = {
  listComments,
  saveComment,
  updateComment,
  deleteComment,
};
