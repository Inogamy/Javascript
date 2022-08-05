import "./styles.css";

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from "./js/components";

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml ( todo ) );

// const tarea = new Todo('Aprender Javascript!!!');
// todoList.nuevoTodo( tarea );

// console.log( todoList );

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'asda123');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500 );

const newTodo = new Todo('Aprender JavaScript');
todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

console.log('todos', todoList.todos);