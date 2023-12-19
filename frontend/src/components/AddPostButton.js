import React from 'react'
import { useNavigate } from 'react-router-dom'

import plus from '../assets/icons/plus.svg'

const AddPostButton = () => {
  const nav =useNavigate()

  return (
    <button onClick={() => nav("/post/add")} className='AddPost'>
      <span className='AddPost__text'>Dodaj nowy post</span>
      <img className='AddPost__Icon' src={plus} alt="add_icon" width={'30px'} height={'30px'}/>
    </button>
  )
}

export default AddPostButton