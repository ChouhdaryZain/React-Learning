import React, { useContext } from 'react'
import styles from './TodoItem.module.css'

import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from '../store/todo-items-store';

function TodoItem({todoname, tododate}) {
  const {deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container text-center">
      <div className={`row ${styles['items-container']} ${styles['kg-row']}`}>
        <div className="col-6">
          {todoname}
        </div>
        <div className="col-4">
          {tododate}
        </div>
        <div className="col-2">
          <button type="button" className={`btn btn-danger ${styles['kg-button']}`}
          onClick={()=> deleteItem(todoname)}
          ><MdDeleteForever /></button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem