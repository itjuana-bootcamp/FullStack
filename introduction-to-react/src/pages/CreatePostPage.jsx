import React from "react";
import CreatePost from '../components/CreatePost';

const CreatePostPage = ({post, onSave}) => {
  return (
    <CreatePost
      post={post}
      onSave={onSave}
    />
  );
};

export default CreatePostPage;
