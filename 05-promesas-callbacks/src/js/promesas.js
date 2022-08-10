
const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder : 'Super fuerza habilidades incrementadas' 
    },
    iron: {
        nombre: 'Ironman',
        poder : 'Super traje' 
    },
    spider: {
        nombre: 'Spiderman',
        poder : 'Fuerza y habilidades superiores'
    }
}

export const buscarHeroe = ( id ) => {

    const heroe  = heroes[id];

    return new Promise( ( resolve, reject ) =>{

        if ( heroe ){

            setTimeout(() => {
                resolve( heroe );    
            }, 1000);   
                     
        } else {
            reject(`No existe un héroe con el id ${ id }`);
        }

    });
}

export const buscarHeroeAsync = async( id ) => {

    const heroe = heroes[id];

        if ( heroe ){
            return heroe;
        } else {
            throw Error(`No existe un heroe con el id ${ id }`);
        }
}

const promesaLenta = new Promise(( resolve, reject ) =>{
    setTimeout(() => resolve('Promesa lenta'), 2000);
});

const promesaMedia = new Promise(( resolve, reject ) =>{
    setTimeout(() => resolve('Promesa media'), 1500);
});

const promesaRapida = new Promise(( resolve, reject ) =>{
    setTimeout(() => resolve('Promesa rapida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}