class Persona {

    static _conteo = 0;
    static get conteo() {
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

    set setComidaFavorita( comida ){
        this.comida =  comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${ this.comida } `
    }

    quienSoy(){
        console.log(`soy ${ this.nombre } y mi identidad es ${ this.codigo}`);
    }

    miFrase(){
        console.log(`${ this.codigo } dice: ${ this.frase}`);
    }
}

class Heroe extends Persona{

    clan = 'sin clan';
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los Avenmgers'
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${  this.clan }`);
        super.quienSoy();
    }

}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino');
// const spiderman = new Heroe();
console.log( spiderman );
