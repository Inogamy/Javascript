
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
            resolve( heroe );
        } else {
            reject(`No existe  un héroe con el id ${ id }`);
        }

    });
}