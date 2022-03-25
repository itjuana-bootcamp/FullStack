import React from "react";
import "../blog.css";

const Post = ({post}) => {
 return (
   <div className="blog-post">
     <div className="blog-post-image">
      <img src={post.image} alt="img"
      width="250" height = "250"
      />
     </div>
     <div className="blog-post-details">
        <p>{post.updatedAt}</p>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <a href={post.blogLink}>READ MORE</a>
     </div>
   </div>
 )
}

export default Post;