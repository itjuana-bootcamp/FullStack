import React from "react";
import { Link } from 'react-router-dom'
import "../blog.css";

const Post = ({post, onEdit, postId}) => {
 return (
   <div className="blog-post">
     <div className="blog-post-image">
      <img src={post.imageUrl} alt="img"
      width="250" height = "250"
      />
     </div>
     <div className="blog-post-details">
        <p>{post.updatedAt}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link to={`post/${postId}`}>READ MORE</Link>
     </div>
     <button
      className="blog-post-edit"
      onClick={() => onEdit()}>
       Edit
     </button>
   </div>
 )
}

export default Post;