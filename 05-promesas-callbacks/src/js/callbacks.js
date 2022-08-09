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

    callback( herioe );
}