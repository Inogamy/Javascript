const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

// fher.imprimir();

function Persona(nombre, edad) {// La primera letra mayuscula indica que es una funcion para crear instancias
    // console.log('Se ejecuto esta linea');// El this hace referencia al objeto y le asigna esa propiedad
    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir =  function(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}


const maria =  new Persona('Maria', 18)// La palabra reservada new indica q crearemos una nueva instancia
const melissa = new Persona('Melissa', 25)
// console.log(maria);
maria.imprimir();
melissa.imprimir();