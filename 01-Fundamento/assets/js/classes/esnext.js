class Rectangulo {

    #area = 0;

    constructor (base = 0, altura = 0){

        this.base   = 10;
        this.altura = 15;

        this.#area =  base * altura;
    }

    #calcularArea(){
        console.log( this.#area *2 );
    }
}
// rectangulo.#area = 100;
const rectangulo = new Rectangulo(10 , 15)
console.log(rectangulo);