
// import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";
// import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";

// import { obtenerHeroesArr, obtenerHeroeAwait } from "./js/await";
import { heroeIfAwait, heroesCiclo } from "./js/await";


// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
//     .then( mensaje => console.log(mensaje));

// buscarHeroe('capi')
//     .then(console.log) 
//     .catch(console.warn)

// buscarHeroe('iron2')
//     .then(console.log) 
//     .catch(console.warn)

// console.time('await')

// obtenerHeroeAwait('capi2')
//     .then( heroe => {
//     console.log(heroe);
//     console.timeEnd('await');
//     });

heroesCiclo();

heroeIfAwait('iron');