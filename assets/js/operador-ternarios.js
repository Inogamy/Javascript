
/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web para consultar si esta abierto hoy...

const dia = 0;
const horaActual = 12;

let horaDeApertura;
let mensaje;

//if ( dia === 0 || dia === 6){
//     if([0,6].includes( dia )){
//     console.log('Fin de semana');
//     horaDeApertura = 9;
// } else{
//     console.log('Dia de semana');
//     horaDeApertura = 11;
// }

horaDeApertura = ( [0,6].includes( dia )) ? 9 : 11;

mensaje = (horaActual >= horaDeApertura) ? 'Esta abierto' : `Esta cerrado hoy abrimos a las ${ horaDeApertura}`

// if ( horaActual >= horaDeApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado hoy abrimos a las ${ horaDeApertura }`;
// }

console.log( horaDeApertura, mensaje );