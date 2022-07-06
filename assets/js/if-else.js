
let a = 5;

if( a >= 10){
    console.log('a es mayor o igual que 10');
}else{
    console.log('A es menor a 10');
}

// console.log('fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

// console.log( hoy );
console.log( dia );

if ( dia === 0 ){
    console.log('Domingo');
}else if( dia === 1 ){
    console.log('Lunes');
}else if( dia === 2 ){
    console.log('Martes');
}else{
    console.log('No es lunes, martes o domingo');
}

dia = 3;

const diasLetras = {   //como objeto
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

console.log( diasLetras[dia]);

const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log( diasLetras2[dia]);
