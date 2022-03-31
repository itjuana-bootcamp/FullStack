const express = require("express");
const router = express.Router();

const postsController = require("../controllers/posts-controller");

const postsMiddleware = require("../middlewares/posts-middleware");

// /posts/
router.get("/", postsController.listPosts);

router.post("/", postsMiddleware.validatePost, postsController.savePost);

router.get("/:id", postsController.getPost);

router.delete("/:id", postsController.deletePost);

router.put("/:id", postsController.updatePost);

module.exports = router;
