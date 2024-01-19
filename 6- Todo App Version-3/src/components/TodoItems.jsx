import React from 'react'
import TodoItem from './TodoItem'
import { useContext } from 'react'
import { TodoItemsContext } from '../store/todo-items-store'

function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map(item => (
        <TodoItem key={item.name} tododate={item.dueDate} todoname={item.name}
        />
      ))}
    </>
  )
}

export default TodoItems