import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import Comment from '../components/Comment'
import CommentInput from '../components/CommentInput'
import Post from '../components/Post'

import { getPost } from '../api/postsApi'
import { getComments, saveComment, updateComment, deleteComment } from '../api/commentsApi'

const DetailPostPage = ({ onDelete }) => {
  const params = useParams()
  const { postId } = params

  const [post, setPost] = useState({})
  const [postComments, setPostComments] = useState([])
  const [toEditComment, setToEditComment] = useState()

  // See https://reactjs.org/docs/hooks-reference.html#usecallback for more information about this hook
  const getPostWithComments = useCallback(async id => {
    const post = await getPost(id)
    if (post) {
      setPost(post)
      const comments = await getComments(postId)
      if (comments)
        setPostComments(comments)
    }
  }, [postId])

  useEffect(() => {
    getPostWithComments(postId)
  }, [postId, getPostWithComments])


  const handleOnSave = async comment => {
    const savedComment = await saveComment(postId, comment)
    if (savedComment)
      setPostComments([...postComments, savedComment])
  }

  const handleOnEdit = async comment => {
    const updatedComment = await updateComment(postId, comment._id, comment)
    if (updatedComment) {
      const copyOfComments = Array.from(postComments);
      const result = copyOfComments.filter(c => c._id !== comment._id)
      setPostComments([...result, updatedComment])
    }
    setToEditComment()
  }

  const handleOnDelete = async commentId => {
    const deletedComment = await deleteComment(postId, commentId)
    if (deletedComment) {
      const copyOfComments = Array.from(postComments);
      const result = copyOfComments.filter(c => c._id !== commentId)
      setPostComments(result)
    }
  }

  return (
    <>
      <Post
        postId={ post._id }
        post={ post }
        isDetails={ true }
        onDelete={ onDelete }
      />
      {
        postComments.map(c => (
          <Comment
            key={ c._id }
            comment={ c }
            onEdit={ () => setToEditComment(c) }
            onDelete={ handleOnDelete }
          />
        ))
      }
      <CommentInput
        comment={ toEditComment }
        onSave={ handleOnSave }
        onEdit={ handleOnEdit }
      />
    </>
  )
}

export default DetailPostPage