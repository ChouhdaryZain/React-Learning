import React from 'react'
import styles from './AddTodo.module.css'
import { useState, useRef } from 'react'

import { MdAddToPhotos } from "react-icons/md";
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';

function AddTodo(/*{ OnNewItem }*/) {
  const { addNewItem } = useContext(TodoItemsContext);

  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // }
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // }
  const handleAddButtonClicked = () => {
    // console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, todoDate);
    //   setTodoName("");
    //   setTodoDate("");
  }


  return (
    <div className="container text-center">
      <form
        onSubmit={handleAddButtonClicked}
        className={`row ${styles['items-container']} ${styles['kg-row']}`}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            className={styles['input']} type="text" placeholder='Enter Todo here'
          // onChange={handleNameChange}
          // value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            ref={dueDateElement}
            className={styles['input']} type="date"
          // onChange={handleDateChange}
          // value={todoDate}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success ${styles['kg-button']}`}
            onSubmit={handleAddButtonClicked}><MdAddToPhotos /></button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo