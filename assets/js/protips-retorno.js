
// function crearPersona( nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona( 'Fernado', 'Herrera' );
console.log( persona );

function imprimeArgumentos() {
    // console.log( arguments );

}

const imprimeArgumentos2 = (edad, ...args) =>{
    // console.log({edad, args});
    return args;
}

const [ casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernado', 'Hola');
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido }  = crearPersona( 'Fernado', 'Herrera');
console.log({ nuevoApellido });