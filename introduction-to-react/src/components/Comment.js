import React from 'react'
import { format } from 'date-fns'

import "../comments.css"

const Comment = ({ comment, onEdit, onDelete }) => {

    return (
        <div className='comment-container'>
            <div className='date-container'>
                <div>
                    <button onClick={ () => onDelete(comment._id) }>
                        Delete
                    </button>
                    <button onClick={ () => onEdit() }>
                        Edit
                    </button>
                </div>
                <strong>{ comment.updatedAt && format(new Date(comment.updatedAt), 'MMMM dd, yyyy') }</strong>
            </div>
            <h1>{ comment.author }</h1>
            <p>{ comment.comment }</p>
        </div>
    )
}

export default Comment