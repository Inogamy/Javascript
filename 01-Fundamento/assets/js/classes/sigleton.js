//Un singleton es una instacia unica de la clase

class Singleton {

    static instancia; //undefined
    nombre = '';

    constructor ( nombre = '') {

        if( !!Singleton.instancia ){// Si ya existe una instancia entonces
            return Singleton.instancia
        }
        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;
    }
}

const instacia1 = new Singleton('Ironman');
const instacia2 = new Singleton('Spiderman');
const instacia3 = new Singleton('Blackpanther')

console.log(`Nombre en la instancia1 es ${ instacia1.nombre }`);
console.log(`Nombre en la instancia2 es ${ instacia2.nombre }`);
console.log(`Nombre en la instancia3 es ${ instacia3.nombre }`);