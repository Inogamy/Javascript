

const regresaTrue = () =>{
    console.log('Regresa true');
    return true;
}

const regresaFalse = () =>{
    console.log('Regresa false');
    return false;
}

console.warn('Not a la negacion');
console.log( true );
console.log(!true);
console.log(!false);

console.log( !regresaFalse() );

console.warn('And');
console.log( true && true );
console.log( true && !false );

console.log('===============');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue()  && regresaFalse() );

console.log('===&&===');
regresaFalse() && regresaTrue();

console.log('4 condiciones', true && true && true && false);

console.warn('Or');
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );
console.log('4 condiciones', true || true || true || false);

console.warn('Asignaciones')

const soyUndefined = undefined;
const soyUnNull = null;
const soyUnFalse = false;

const a1 = false && 'Hola mundo' && 150;
const a2 = 'hola' && 'mundo' && true;
const a3 = soyUnFalse || 'Ya no soy falso';
const a4 = soyUnFalse || soyUnNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyUnFalse || soyUnNull || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5 });

if ( regresaFalse() && regresaTrue() && (true && false && true)){
    console.log('Hacer algo');
}
else
