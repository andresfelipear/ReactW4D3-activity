import React from 'react'

const ToDos = ({todoArr}) => {
  return (
      <div className="collection">
        {
            todoArr && todoArr.map((todo) => (
                <div className='collection-item' key={todo.id}>
                    <span style={{ textDecoration: todo.isDone ? "line-through": "none" }}>{todo.content}</span>
                </div>
            ))
        }
      </div>
  )
}

export default ToDos
