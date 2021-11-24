import React from 'react'

const ToDos = ({ todoArr }) => {
  return (
    <div className='collection'>
      {todoArr &&
        todoArr.map((todo) => (
          <div className='collection-item' key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? 'line-through' : 'none',
              }}
              onClick={() => {}}
            >
              {todo.content}
            </span>
            <a href='#~' className='secondary-content' onClick={() => {}}>
              <i className='material-icons red-text text-accent-1'>delete</i>
            </a>
            <a href='#~' onClick={() => {}} className='secondary-content'>
              <i
                className={`material-icons ${
                  !todo.isDone
                    ? 'blue-text text-lighten-4'
                    : 'amber-text text-darken-2'
                }`}
              >
                check
              </i>
            </a>
          </div>
        ))}
    </div>
  )
}

export default ToDos
