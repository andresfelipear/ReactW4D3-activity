import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ToDos from '../components/ToDos'
import AddForm from '../components/AddForm'
import FilterButtons from '../components/FilterButtons'
import {doneToDo, removeToDo} from "../redux/action/actions"
import { useDispatch } from 'react-redux'

const TodoList = () => {
  const [filterValue, setFilterValue] = useState('SHOW_ALL')
  
  //Use dispatch
  const dispatch = useDispatch()

  //similar to mapStateToProps
  const todoArr = useSelector((state) => state.toDoList)

  const getVisibleToDos = (todoArr, filterValue) => {
    switch (filterValue) {
      case 'SHOW_ALL':
        return todoArr
      case 'SHOW_ACTIVE':
        return todoArr.filter((todo) => !todo.isDone)
      case 'SHOW_COMPLETED':
        return todoArr.filter((todo) => todo.isDone)
      default:
        break
    }
  }

  const visibleList = getVisibleToDos(todoArr, filterValue)

  const setIsDone = (id) => {
    dispatch(doneToDo({ id }))
  }

  const deleteTodo = (id) =>{
    dispatch(removeToDo({ id }))
  }

  return (
    <div>
      <AddForm />
      <FilterButtons
        setFilterValue={setFilterValue}
      />
      <ToDos todoArr={visibleList} setIsDone={setIsDone} deleteTodo={deleteTodo} />
      {/* {todoArr && todoArr.map((todo) => <ToDos todo={todo} key={todo.id} />)} */}
    </div>
  )
}

export default TodoList
