import React, { useState } from "react"
import {Link} from 'react-router-dom'
import "../forms.css"

const CreatePost = ({ onSave, post }) => {

  const defaultNewPost = {
    title: '',
    body: '',
    imageUrl: '',
    updatedAt: (new Date()).toISOString(),
  }

  const [newPost, setNewPost] = useState(post || defaultNewPost)

  const handleOnChange = event => {
    const name = event.target.name;
    const value = name === 'imageUrl'
      ? URL.createObjectURL(event.target.files[0])
      : event.target.value;

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
          {
            newPost.imageUrl !== ''
            ? <img
                style={{
                  maxHeight: "200px",
                  maxWidth: "400px",
                  alignSelf: "center",
                  borderRadius: "8px",
                }}
                src={newPost.imageUrl}
                alt="img"
              />
            : <input
                type='file'
                name="imageUrl"
                onChange={handleOnChange}
              />
          }
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
            onClick={() => onSave(newPost)}>
            Save post
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost