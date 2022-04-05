const CommentsService = require("../services/comments-service");

const listComments = async (req, res, next) => {
  const { id } = req.params;

  try {
    const comments = await CommentsService.listComments(id);

    if (!comments) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(comments);
  } catch (error) {
    next(error);
  }
};

const saveComment = async (req, res, next) => {
  const { id } = req.params;
  const comment = req.body;

  try {
    const savedComment = await CommentsService.saveComment(id, comment);

    if (!savedComment) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(201).json(savedComment);
  } catch (error) {
    next(error);
  }
};

const updateComment = async (req, res, next) => {
  const { id, commentId } = req.params;
  const newCommentData = req.body;

  try {
    const updatedComment = await CommentsService.updateComment(
      id,
      commentId,
      newCommentData
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Post or comment not found" });
    }

    res.json(updatedComment);
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  const { id, commentId } = req.params;

  try {
    await CommentsService.deleteComment(id, commentId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listComments,
  saveComment,
  updateComment,
  deleteComment,
};
