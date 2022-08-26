import React from "react";

function TodoList(props) {
  const { todos } = props;
  return (
    <div>
      <h1>My todo list:</h1>
      <ul>{/* make the list here */}</ul>
    </div>
  );
}

export default TodoList;
