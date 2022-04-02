import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../components/Post'
import { getPost } from '../api/postsApi'

const DetailPostPage = () => {
  const params = useParams()
  const { postId } = params

  const [post, setPost] = useState({})

  useEffect(() => {
    getPostWId(postId)
  }, [postId])

  const getPostWId = async id => {
    const post = await getPost(id)
    if (post)
      setPost(post)
  }

  return (
    <Post post={post} />
  )
}

export default DetailPostPage