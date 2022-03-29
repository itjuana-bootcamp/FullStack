import React from 'react'
import { useParams } from 'react-router-dom'
import Post from '../components/Post'

const DetailPostPage = ({onEdit, getPostById}) => {
  const params = useParams()
  const { postId } = params
  const post = getPostById(postId)
  return (
    <Post post={post} onEdit={ () => onEdit(postId) }/>
  )
}

export default DetailPostPage