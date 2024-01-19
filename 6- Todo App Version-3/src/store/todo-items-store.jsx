import { createContext, useReducer } from "react";
import React from 'react'

export const TodoItemsContext = createContext(
  {
    todoItems: [],
    addNewItem: () => { },
    deleteItem: () => { },
  },
);

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.todoItem);
  }
  return newTodoItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  }

  const deleteItem = (todoItem) => {

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItem,
      },
    };
    dispatchTodoItems(deleteItemAction);
  }
  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem,
    }}
    >{children}</TodoItemsContext.Provider>
  )
}

export default TodoItemContextProvider;