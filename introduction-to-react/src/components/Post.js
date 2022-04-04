import React from "react";
import { Link } from 'react-router-dom'
import { format } from "date-fns";
import "../blog.css";

const Post = ({ post, postId, onDelete }) => {

 return (
   <div className="blog-post">
     <div className="blog-post-image">
      <img src={post.imageUrl} alt="img"
      width="250" height = "250"
      />
     </div>
     <div className="blog-post-details">
        <p>{format(new Date(post.updatedAt), 'MMMM dd, yyyy')}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link to={`post/${postId}`}>READ MORE</Link>
     </div>
     <Link
      className="blog-post-edit"
      to={`create-post/${postId}`}>
       Edit
     </Link>
     <button
      onClick={() => onDelete(postId)}
      style={{ border: 0, backgroundColor: 'white', fontSize: 20}}>
      X
     </button>
   </div>
 )
}

export default Post;