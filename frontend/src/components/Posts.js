import React from 'react'

import dogo from "../assets/images/dogo.jpg"

const Posts = () => {
  return (
    <div className='Posts'>
        <p className='Posts__description'>@Taylor: Goal achieved, going out with my dogo! It was a lovley day :)</p>
        <img src={dogo} alt='funny_dog' className='Posts__image'></img>
        <ul className='Posts__buttons'>
            <li className='Posts__buttons__likes'></li>
            <li className='Posts__buttons__coments'></li>
            <li className='Posts__buttons__dislikes'></li>
        </ul>
    </div>
  )
}

export default Posts