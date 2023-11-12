import React, { useState, useEffect } from 'react'
import Post from '../components/Post'

const Posts = () => {
  let [posts, setPosts] = useState([])
  useEffect(() => {
    let getPosts = async () => {
      let response = await("")
    }
    getPosts()
  })
  return (
    <div>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts