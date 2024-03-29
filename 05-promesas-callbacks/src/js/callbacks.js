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

export const buscarHeroe = ( id, callback) =>{

    const heroe = heroes[id];

    if ( heroe ){
        callback(null, heroe);
    } else {
        // Un error
        callback(`No existe  un héroe con el id ${ id }`);
    }

    // callback( heroe );
}