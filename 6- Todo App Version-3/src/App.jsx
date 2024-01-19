import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import TodoItemsContextProvider  from './store/todo-items-store';

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
      </TodoItemsContextProvider>
  )
}

export default App
