import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import CreatePost from '../components/CreatePost';

import { getPost } from "../api/postsApi";

const CreatePostPage = ({ onSave }) => {
  const params = useParams()
  const { postId } = params
  
  const [post, setPost] = useState()

  useEffect(() => {
    getPostWId(postId)
  }, [postId])

  const getPostWId = async id => {
    if (id) {
      const post = await getPost(id)
      if (post)
        setPost(post)
    }
  }

  return (
    <CreatePost
      post={post}
      onSave={onSave}
    />
  );
};

export default CreatePostPage;
