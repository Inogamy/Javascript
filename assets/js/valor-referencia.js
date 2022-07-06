

let a = 10;
let b = a;

console.log(a, b);

let juan = { nombre: 'Juan'};
let ana  = {...juan}; //... operador spress simboliza separa los elementos
ana.nombre = 'Ana'

console.log(juan, ana);

const cambiaNombre = ( {...persona} ) =>{//... parametro Rest une todo los argumentos en una sola y los convierte en un arreglo
    persona.nombre = 'Tony'
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre( peter );

console.log( peter, tony );

//Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice')

console.time('spread');
const otrasFrutas2 = [...frutas]; 
console.timeEnd('spread')

otrasFrutas.push('Mango')

console.table({ frutas, otrasFrutas });