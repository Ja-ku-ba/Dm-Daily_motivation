import React, { useState, useEffect } from 'react'

import Post from '../components/Post'
import AddPostButton from '../components/AddPostButton'

const Posts = () => {
  let [posts, setPosts] = useState([])
  useEffect(() => {
    let getPosts = async () => {
    let response = await fetch ("posts/post/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
          }
        })
      console.log(response)
      let content = await response.json
      console.log(content)
    }
    getPosts()
  }, [])

  return (
    <div>
      <AddPostButton/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts