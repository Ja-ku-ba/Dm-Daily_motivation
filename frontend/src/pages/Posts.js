import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      <Link to="/post"><Post onClick={() => showPost()}/></Link>
      <Link to="/post"><Post onClick={() => showPost()}/></Link>
      <Link to="/post"><Post onClick={() => showPost()}/></Link>
      <Link to="/post"><Post onClick={() => showPost()}/></Link>
      <Link to="/post"><Post onClick={() => showPost()}/></Link>
    </div>
  )
}

export default Posts