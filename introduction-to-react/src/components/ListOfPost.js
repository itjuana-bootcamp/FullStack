import React from "react";
import Post from "./Post";

const ListOfPost = ({ posts, onDelete }) => {
  return (
    <>
      {posts.map(post => {
        return (
          <Post
            key={post.updatedAt + post.title}
            post={post}
            postId={post._id}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default ListOfPost;
