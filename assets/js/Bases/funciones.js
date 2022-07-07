

function saludar( nombre ) {
    console.log('Hola ' + nombre);
}

const saludar2 = function ( nombre ) {  //Funcion anonima
    console.log('Hola ' + nombre);
}

const saludarFlecha = () =>{
    console.log('Hola mundo con flechas');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

// saludar('fernando ');
// saludar2('Luis ');
// saludarFlecha();
// saludarFlecha2('Flecha');


function sumar( a, b ) {
    return a + b;
}

const sumar2 = (a, b) =>{
    return a + b;
}

const sumar3 = (a, b) => a + b;

// console.log( sumar( 2, 5 ));
// console.log( sumar2( 2, 8 ));
// console.log( sumar3( 25, 5 ));

const getAleatorio = () =>{
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );