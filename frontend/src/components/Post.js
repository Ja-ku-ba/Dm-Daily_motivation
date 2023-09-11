import React from 'react'

import dogo from "../assets/images/dogo.jpg"

const Post = () => {
  return (
    <div className='Post'>
        <p className='Post__description'>@Taylor: Goal achieved, going out with my dogo! It was a lovley day :)</p>
        <img src={dogo} alt='funny_dog' className='Post__image'></img>
        <ul className='Post__buttons'>
            <li className='Post__buttons__likes'></li>
            <li className='Post__buttons__coments'></li>
            <li className='Post__buttons__dislikes'></li>
        </ul>
    </div>
  )
}

export default Post