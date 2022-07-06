
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

//Destructuracion de objetos

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    
};

// const imprimePropiedades = ( personaje ) =>{
//     console.log('Nombre', personaje.nombre );
//     console.log('CodeName', personaje.codeName );
//     console.log('Vivo', personaje.vivo );
//     console.log('Edad', personaje.edad );
//     console.log('Trajes', personaje.trajes );
// }

const imprimePropiedades = ( {nombre, codeName, vivo, edad, trajes} ) =>{
    console.log({nombre}); 
    console.log({codeName}); 
    console.log({vivo}); 
    console.log({edad}); 
    console.log({trajes});
}

imprimePropiedades( tony )