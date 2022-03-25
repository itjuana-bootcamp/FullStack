import React from "react";
import "../blog.css";

const NavBar = () => {

  return (
    <div className="blog-post-navbar">
      <div className="blog-post-brand">
        <a href="https://itjuana.com/"></a>
        <img 
          src="https://itjuana.com/wp-content/themes/itjuana/assets/images/svg-grid/itijuana-logo-color.svg"
          alt="" width="100" height="50"></img>
      </div>
      <ul>
        <li className="blog-post-navbar">Join our team</li>
        <li className="blog-post-navbar">Contact us</li>
        <li className="blog-post-navbar">Create New Post</li>
      </ul>
    </div>
  )
}

export default NavBar