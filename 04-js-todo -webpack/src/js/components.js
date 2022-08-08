import { todoList } from '..';
import { Todo, TodoList } from '../classes';
// Referencias al HTML 
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


export const crearTodoHtml = ( todo ) =>{//insertar el nuevo todo al html

    const htmlTodo = `
    <li class="${ (todo.completado)? 'completed' : ''}" data-id="${ todo.id }">
		<div class="view">
			<input class="toggle" type="checkbox" ${ (todo.completado)? 'checked' : ''} >
			<label>${ todo.tarea } </label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}

// Eventos
txtInput.addEventListener( 'keyup', (event) => {
    if ( event.keyCode === 13 && txtInput.value.length > 0){//insertar una nueva tarea
        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml( nuevoTodo );
        txtInput.value = "";
    }
});

divTodoList.addEventListener('click', (event)=>{

    const nombreElemento = event.target.localName// input, label o button
    const todoElemento   = event.target.parentElement.parentElement// Referencia al li
    const todoId         = todoElemento.getAttribute('data-id')// Obtiene el id del todoElemnto

    if ( nombreElemento.includes('input')){// Click en el check

        todoList.marcarCompletado ( todoId );//Para hacer el check
        todoElemento.classList.toggle( 'completed' );//Para hacer el tachado a la tarea
    } else if ( nombreElemento.includes('button')){
        todoList.eliminarTodo( todoId );// Elimina del arreglo
        divTodoList.removeChild( todoElemento )// Eliminar del HTML
    }

    console.log(todoList);
})

btnBorrar.addEventListener('click', () =>{
    todoList.eliminarCompletados();

    for( let i = divTodoList.children.length-1; i>=0; i--){

        const elemento = divTodoList.children[i];
        
        if( elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});

ulFiltros.addEventListener( 'click', (event) =>{

    // console.log(event.target.text);
    const filtros = event.target.text;
    if( !filtros ){ return };// No genera ningun evento si damos click en un espacio vacio
    anchorFiltros.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ){

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtros ){
            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
            break;
            
            case 'Completados':
                if( !completado ){
                    elemento.classList.add('hidden');
                }
            break;
        }
    }
})