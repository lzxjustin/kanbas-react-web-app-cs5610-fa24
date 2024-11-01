import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type Todo = {
    id: number;
    title: string;
  };

export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item" >

      <button onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"
              className="btn btn-danger float-end"
              style={{ borderRadius: '10px' , border: 'none' , padding: '10px 10px',  fontSize: '16px' }}> 
              Delete </button>
      <button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"
              className="btn btn-primary float-end"
               style={{ borderRadius: '10px' , marginLeft: '10px' , marginRight: '10px' , border: 'none' , padding: '10px', fontSize: '16px' }}> 
               Edit </button>
      {todo.title}
    </li>
);}
