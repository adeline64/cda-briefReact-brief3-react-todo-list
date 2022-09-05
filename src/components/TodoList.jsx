import React from "react";

function TodoList(props) {
  const { todos } = props;
  return (
    <div>
      <h1>My todo list:</h1>
      <ul>
        {
        /* make the list here */
        // todos.map((todos) => <li key = {todos.id}>{todos.title},{todos.completed}</li>)
          todos.map((todos)=> 
            <li
              key={todos.id}
            >
              {todos.title}
              {todos.completed}
            </li>)
        }
      </ul>
    </div>
  );
}

export default TodoList;