
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento, indice, arr})
})

let nuevaLogintud = juegos.push('F-zero');
console.log({nuevaLogintud, juegos});

nuevaLogintud = juegos.unshift('Fire emblem');
console.log({nuevaLogintud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;

console.log(juegos)
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid'); //CaseSensitive
console.log({metroidIndex});