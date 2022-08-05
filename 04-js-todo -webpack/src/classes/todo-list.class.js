import { Todo } from "./todo.class";


export class TodoList {

    constructor() {

        // this.todos = [];
        this.cargarLocalSorage();

    }

    nuevoTodo( todo ){

        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo( id ){

        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();

    }

    marcarCompletado( id ){

        for( const todo of this.todos ){
            console.log(id, todo.id);
            if( todo.id == id ){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados(){
        
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));// Convierte mi arreglo de todos a un arreglo perfecto
    }

    cargarLocalSorage(){

        // if( localStorage.getItem('todo')){

        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log('cargar local', this.todos);

        // }else {
        //     this.todos =  [];
        // }
        //operador ternario
        this.todos = ( localStorage.getItem('todo'))
                        ? JSON.parse( localStorage.getItem('todo')) 
                        : [];

        this.todos = this.todos.map( Todo.fromJson );
    }
}