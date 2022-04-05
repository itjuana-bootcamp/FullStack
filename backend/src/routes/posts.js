const express = require("express");
const router = express.Router();

const postsController = require("../controllers/posts-controller");
const commentsController = require("../controllers/comments-controller");

const postsMiddleware = require("../middlewares/posts-middleware");

// /posts/

router.get("/", postsController.listPosts);

router.post("/", postsMiddleware.validatePost, postsController.savePost);

router.get("/:id", postsController.getPost);

router.delete("/:id", postsController.deletePost);

router.put("/:id", postsController.updatePost);

// Comments

router.get("/:id/comments", commentsController.listComments);

router.post("/:id/comments", commentsController.saveComment);

router.put("/:id/comments/:commentId", commentsController.updateComment);

router.delete("/:id/comments/:commentId", commentsController.deleteComment);

module.exports = router;
