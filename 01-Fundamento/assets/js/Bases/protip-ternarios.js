
const elMAyor = (a, b) => ( a > b ) ? a : b; //Funcion reducida porq solo retorna una sola linea

// const elMAyor = (a, b) =>{
//     return ( a > b ) ? a : b;
// }

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dolares' : '10 Dolares'

console.log( elMAyor( 17, 15));
console.log(tieneMembresia( true ));

const amigo = true;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki', //Si amigo es true entonces aparece Thor caso contrario Loki
    // ( () => 'Nick Fury')(),
    elMAyor(10, 15)
];

console.log( amigoArr );

const nota = 65;
const grado = nota >= 95 ? 'A+' :
              nota >= 92 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'A+' :
              nota >= 70 ? 'A+' : 'F'

console.log( nota, grado);