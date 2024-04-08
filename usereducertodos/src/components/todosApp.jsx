import React, { useReducer } from "react";
import reducer from "./reducer";
import AddTodos from "./addTodos";
import TodoList from "./todoList";
import { ADD, DELETE, EDIT } from "./actionType";

const initialState = [
 { id: 0, todo: "Sleep", status: false },
 { id: 1, todo: "Instagram", status: false },
];

let index = 3;

function TodosApp() {
 const [todos, dispatch] = useReducer(reducer, initialState);

 function handleAddTodo(todoText) {
    dispatch({
      type: ADD,
      id: index++,
      todoText: todoText,
    });
 }

 function handleChange(todo) {
    dispatch({
      type: EDIT,
      id: todo.id,
      todoText: todo.todoText,
    });
 }

 function handleDelete(todoId) {
    dispatch({
      type: DELETE,
      id: todoId,
    });
 }

 return (
    <div>
      <AddTodos onAddTodo={handleAddTodo} />
      <TodoList onChange={handleChange} onDelete={handleDelete} todos={todos} />
    </div>
 );
}

export default TodosApp;
