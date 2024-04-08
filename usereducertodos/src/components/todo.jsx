import React, { useState } from "react";

function Todo({ todo, onChange, onDelete }) {
 const [isEditing, setIsEditing] = useState(false);
 const [todoText, setTodoText] = useState(todo.todo);

 const handleEdit = () => {
    setIsEditing(true);
 };

 const handleSave = () => {
    setIsEditing(false);
    onChange({ ...todo, todoText });
 };

 const handleDelete = () => {
    onDelete(todo.id);
 };

 return (
    <li key={todo.id}>
      {isEditing ? (
        <>
          <input
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {todoText}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
 );
}

export default Todo;
