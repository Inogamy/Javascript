//Logica para centralizar peticiones
const jokeUrl     = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';


const obtenerChiste = async() =>{

    try {
        
        const resp = await fetch( jokeUrl );

        if( !resp.ok ) throw 'No se pudo realizar la petición';

        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value }

    } catch (error) {

        throw error;
    }

    

}

const obtenerUsuarios = async() => {

    try {
        
        const resp = await fetch(urlUsuarios);

        if ( !resp.ok ) throw 'No se puedo realizar la peticion';

        const {data:usuarios} = await resp.json();

        return usuarios;
    
    } catch (error) {
        throw error;
    }
    
}


export {
    obtenerChiste,
    obtenerUsuarios
}














// fetch( jokeUrl ).then( resp =>{

//   resp.json().then( ({ id, value}) =>{
//     console.log(id);
//     console.log(value);
//   })

// });

// fetch(jokeUrl)
//   .then( resp => resp.json() )
//   .then( ({ id, value }) =>{
//     console.log(id, value);
//   });