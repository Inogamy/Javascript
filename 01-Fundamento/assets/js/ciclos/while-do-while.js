
console.warn('While')
const carro = [ 'Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while ( i < carro.length) {
//     console.log(carro[i]);
//     i++;
// }

while (carro[i]) {
    if ( i === 1 ) {
        i++;
        continue;
    }
    console.log( carro[i] );
    i++;
}
 console.warn('Do while')
let j = 0;
 do {
    console.log( carro[j] );
    j++
 } while ( carro[j] );
