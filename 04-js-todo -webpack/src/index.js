import "./styles.css";

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from "./js/components";

export const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript!!!');
todoList.nuevoTodo( tarea );



console.log( todoList );

crearTodoHtml( tarea );