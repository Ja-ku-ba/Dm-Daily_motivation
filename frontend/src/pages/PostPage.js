import React from 'react'

import Post from "../components/Post"
import { Link } from 'react-router-dom'

const PostPage = () => {
  let addComent = async () => {

  }

  return (
    <div className='PostPage'>   
      <Post params={""}/>

      <div className='PostPage__coments'>
        <form className='PostPage__coments__form' onSubmit={() => addComent()}>
          <textarea className='PostPage__coments__form__input' rows="3" placeholder='Napisz co myślisz!'/>
          <input className='PostPage__coments__form__button' type='submit' value={"Wyraź siebie"}/>
        </form>

        <ul className='PostPage__coments__list'>
          <li className='PostPage__coments__list__coment'>
            <div className='PostPage__coments__list__coment__info'>
              <Link>@Taylor</Link>
              <span>24.11.2023, 12:17</span>
            </div>
            <p className='PostPage__coments__list__coment__body'>Thisgives me THIS postive energy!!!</p>
          </li>
          <li className='PostPage__coments__list__coment'>
            <div className='PostPage__coments__list__coment__info'>
              <Link>@Taylor</Link>
              <span>24.11.2023, 12:17</span>
            </div>
            <p className='PostPage__coments__list__coment__body'>Thisgives me THIS postive energy!!!</p>
          </li>
          <li className='PostPage__coments__list__coment'>
            <div className='PostPage__coments__list__coment__info'>
              <Link>@Taylor</Link>
              <span>24.11.2023, 12:17</span>
            </div>
            <p className='PostPage__coments__list__coment__body'>Thisgives me THIS postive energy!!!</p>
          </li>
          <li className='PostPage__coments__list__coment'>
            <div className='PostPage__coments__list__coment__info'>
              <Link>@Taylor</Link>
              <span>24.11.2023, 12:17</span>
            </div>
            <p className='PostPage__coments__list__coment__body'>Thisgives me THIS postive energy!!!</p>
          </li>
          <li className='PostPage__coments__list__coment'>
            <div className='PostPage__coments__list__coment__info'>
              <Link>@Taylor</Link>
              <span>24.11.2023, 12:17</span>
            </div>
            <p className='PostPage__coments__list__coment__body'>Thisgives me THIS postive energy!!!</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostPage