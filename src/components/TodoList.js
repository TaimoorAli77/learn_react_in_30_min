import React from 'react'
import Todo from './Todo'
const TodoList = ({todos , toggleTodos}) => {
  return (
    <div>
      <h1>Taimoor Hello </h1>
      {todos.map(todo=>(
         <Todo key={todo.id} toggleTodos={toggleTodos} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
