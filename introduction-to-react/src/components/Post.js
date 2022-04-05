import React from "react";
import { Link } from 'react-router-dom'
import { format } from "date-fns";
import "../blog.css";

const Post = ({ post, postId, onDelete, isDetails }) => {
 return (
   <div className="blog-post">
     <div className="blog-post-image">
      <img src={post.imageUrl} alt="img"
      width="250" height = "250"
      />
     </div>
     <div className="blog-post-details">
        <p>{post.updatedAt && format(new Date(post.updatedAt), 'MMMM dd, yyyy')}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        { !isDetails && <Link to={`post/${postId}`}>READ MORE</Link> }
        
     </div>
     {
        isDetails &&
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Link
            className="blog-post-edit"
            to={`/create-post/${postId}`}>
            Edit
          </Link>
          <button
            className="blog-post-delete"
            onClick={() => onDelete(postId)}
          >
            X
          </button>
        </div>
     }
   </div>
 )
}

export default Post;