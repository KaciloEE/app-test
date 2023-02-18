import React from 'react'
import './UserPosts.css'

export const UserPosts = ({ post }) => {
    return (
        <div className='user__post rounded my-2 py-4 px-6 bg-transparent'>
            <h1 className='text-left font-bold mb-4'>{post.title}</h1>
            <p className='text-left'>{post.body}</p>
        </div>
    )
}
