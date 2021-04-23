
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addLike, addPost, deletePost, getPosts, removeLike } from '../../../redux/actions/postAction'

const Posts = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState()
    const posts = useSelector((state) => state.postReducer.posts)

    const addpostSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost({text}))
    }

    const handleDeletePost = (id) => {
        dispatch(deletePost(id))
    }

    const handleAddLike = (id) => {
        dispatch(addLike(id))
    }

    const handleUnlike = (id) => {
        dispatch(removeLike(id))
    }

    useEffect(() => {
        dispatch(getPosts())
    }, [])
    return (
        <div>
            <h1>ADD new post</h1>
            <form onSubmit={addpostSubmit}>
                <label htmlFor="text">Text</label>
                <textarea id="text"
                    placeholder="enter your post"
                    type="text"
                    onChange={e => setText(e.target.value)}
                    value={text}
                />
                <button type="submit">Add post</button>
            </form>
            <h1>POSTS data</h1>
            {posts && posts.length > 0 && posts.map(post => (
                <div key={post._id}>
                    <h1>{post.text}</h1>
                    <h1>{post.name}</h1>
                    <img src={post.avatar} alt="av" />
                    <button onClick={()=> handleDeletePost(post._id)}>Delete</button>
                    <button onClick={()=> handleAddLike(post._id)}>like</button>
                    <p>likes:{post.likes.length}</p>
                    <button onClick={()=> handleUnlike(post._id) }>Unlike</button>
                </div>
            ))}
        </div>
    )
}

export default Posts
