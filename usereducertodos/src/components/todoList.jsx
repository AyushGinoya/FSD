import React from "react";
import Todo from "./todo";

function TodoList({ todos, onChange, onDelete }) {
 return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onChange={onChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
 );
}

export default TodoList;
