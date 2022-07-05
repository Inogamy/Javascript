
let personaje = {
    nombre: 'Tony Stark',
    condeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.7
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10850, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity war'
};
console.log( personaje );
console.log( 'Nombre', personaje.nombre );
console.log( 'Nombre', personaje['nombre'] );
console.log( 'Edad', personaje.edad );
console.log( 'Coors', personaje.coords );
console.log( 'N° de trajes', personaje.trajes.length );
console.log( 'Ultimo traje', personaje.trajes[personaje.trajes.length - 1] );

const x = 'vivo';
console.log( 'vivo', personaje[x] ); 
console.log( 'Ultima pelicula', personaje["ultima-pelicula"] );

//Mas detalles

delete personaje.edad;
console.log( personaje );

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

//Persona = true;
console.log( personaje );

Object.freeze( personaje );

personaje.dinero = 10000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa rica';
console.log(personaje);

const properties = Object.getOwnPropertyNames( personaje );
const values    = Object.values( personaje );
console.log(properties, values );