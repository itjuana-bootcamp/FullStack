import React, { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import "../forms.css"

const CreatePost = ({ onSave, post }) => {

  const defaultNewPost = {
    title: '',
    body: '',
    imageUrl: '',
    updatedAt: (new Date()).toISOString(),
    author: '',
  }

  const [newPost, setNewPost] = useState(defaultNewPost)

  useEffect(() => {
    if (post)
      setNewPost(post)
  }, [post])

  const handleOnChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setNewPost({ ...newPost, [name]: value })
  }

  return (
    <div className="container">
      <form id='create-post-form' className="post-form">
        <div className="input-field">
          <label>Post title</label>
          <input
            type="text"
            name="title"
            placeholder="Add a title"
            value={newPost.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-field">
          <label>Post body</label>
          <textarea
            style={{ height: "200px" }}
            type="text"
            name="body"
            placeholder="Add a body to the post"
            value={newPost.body}
            onChange={handleOnChange}
          />
        </div>

        <div className="input-field">
          <label>Add an image</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Add an image url"
            value={newPost.imageUrl}
            onChange={handleOnChange}
          />
          {
            newPost.imageUrl !== '' &&
            <img
              style={{
                marginTop: "40px",
                maxHeight: "200px",
                maxWidth: "400px",
                alignSelf: "center",
                borderRadius: "8px",
              }}
              src={newPost.imageUrl}
              alt="img"
            />
          }
        </div>

        <div className="input-field">
          <label>Author</label>
          <input
            type="text"
            name="author"
            placeholder="Your name"
            value={newPost.author}
            onChange={handleOnChange}
          />
        </div>

        <div className="buttons-container">
          <Link
            to="/"
          >
            Cancel
          </Link>
          <button
            type="button"
            disabled={newPost.title === '' || newPost.body === ''}
            onClick={() => {
              if (post?._id)
                onSave(post._id, newPost)
              else
                onSave(newPost)
            }}>
            Save post
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost