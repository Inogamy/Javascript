
class Persona {

    static _conteo = 0;// las propiedades estaticas se pueden usar sin ser instanciadas
    static get conteo() {// la palabra static me permite usar el get sin instanciarlo
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre );
        console.log('Hola a todos soy un metodo stático');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ){// el SET es para establecer un valor
        this.comida =  comida.toUpperCase();// lo que recibas lo pases como mayuscula y lo establezcas en la propiedad comida
    }
    get getComidaFavorita(){// el GEt es para recuperar un valor
        return `La comida favorita de ${ this.nombre } es ${ this.comida } `
    }

    quienSoy(){
        console.log(`soy ${ this.nombre } y mi identidad es ${ this.codigo}`);
    }

    miFrase(){
        console.log(`${ this.codigo } dice: ${ this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy ironman');


// console.log(ironman);
spiderman.quienSoy();
// ironman.quienSoy();
spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'Pie de cereza de la tia may'
// console.log( spiderman.getComidaFavorita );
// console.log(spiderman);
// Persona._conteo = 2;
console.log('Conteo statico', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola a todos';
console.log( Persona.propiedadExterna );
console.log( Persona );
