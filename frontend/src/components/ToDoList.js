import React from 'react'

const ToDoList = () => {
  return (
    <div className='ToDoList'>
        <ul className='ToDoList__group'>
            <li className='ToDoList__group__element'>
                <span className='goal'>Iron clothes</span>
                <span className='status done'></span>
            </li>
            <li className='ToDoList__group__element'>
                <span className='goal'>Iron clothes</span>
                <span className='status done'></span>
            </li>
            <li className='ToDoList__group__element'>
                <span className='goal'>Iron clothes</span>
                <span className='status done'></span>
            </li>
            <li className='ToDoList__group__element'>
                <span className='goal'>Iron clothes</span>
                <span className='status done'></span>
            </li>
            <li className='ToDoList__group__element'>
                <span className='goal'>Iron clothes</span>
                <span className='status done'></span>
            </li>
        </ul>
        <div className='ToDoList__add'>
            <button>Add +</button>
        </div>
    </div>
  )
}

export default ToDoList