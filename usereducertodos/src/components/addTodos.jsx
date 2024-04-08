import React, { useState } from "react";

const AddTodos = ({ onAddTodo }) => {
 const [todo, setTodo] = useState("");

 const handleInputChange = (event) => {
    setTodo(event.target.value);
 };

 const handleAddTodo = () => {
    if (todo.trim() !== "") {
      onAddTodo(todo);
      setTodo("");
    }
 };

 return (
    <div>
      <input
        type="text"
        placeholder="add todo"
        value={todo}
        onChange={handleInputChange}
      />{" "}
      <button disabled={todo.trim().length === 0} onClick={handleAddTodo}>
        Add
      </button>
    </div>
 );
};

export default AddTodos;
