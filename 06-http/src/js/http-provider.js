//Logica para centralizar peticiones
const jokeUrl     = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudPreset = 'eej2nztl';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/indupan/upload'



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

// ArchivoSubir :: File
const subirImagen = async ( archivoSubir ) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch (cloudUrl, {
            method: 'POST',
            body  : formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
        
    } catch (error) {
        throw error;
    }
}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
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