
const miModulo = (() =>{

    'use strict'
    let deck         = [];
    const tipos      = ['C', 'D', 'H', ],   
          especiales = ['A', 'J', 'Q', 'K'];
    
     let puntosJugadores = [];     
    // let puntosJugador     = 0,
    //     puntosComputadora = 0;
    
    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');
    
    const divCartasJugadores = document.querySelectorAll('.divCartas'),   
          puntosHTML = document.querySelectorAll('small'); //asigno en el HTML
    
     // Esta funcion inicializa el juego     
    const inicializaJuego = ( numJugadores = 2 ) =>{
        deck = crearDeck();
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);            
        }

        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerText = '' );

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }
    //Esta funcioan crea una nueva baraja 
    const crearDeck = () =>{
    
        deck = [];
        for( let i = 2; i <= 10; i++){
            for( let tipo of tipos ){
                deck.push( i + tipo )
            }
        }
    
        for( let tipo of tipos){
            for( let esp of especiales){
                deck.push(esp + tipo )
            }
        }
    
        return _.shuffle( deck );

    }
    
    
    
    // esta funcion me permite tomar una carta
    const pedirCarta = () =>{
    
        if( deck === 0){
            throw 'No hay cartas'
        }
    
        return deck.pop();
    }    
    pedirCarta();
    
    const valorCarta = ( carta ) =>{
        const valor = carta.substring( 0, carta.length - 1);
        return ( isNaN( valor) ) ? 
                (valor === 'A') ? 11 : 10
                : valor * 1;
        
    }
    
    // Turno: 0 sera el primer jugador y el ultimo sera la computadora
    const acumularPuntos = ( carta, turno ) =>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno]; //en su primera posicion va a ser igual a los puntos del jugador
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) =>{

        const imgCarta = document.createElement('img'); //Crear la constante para la imagen de la carta
              imgCarta.src = `assets/cartas/${ carta }.png`; //asigna y muestra la carta 
              imgCarta.classList.add('carta');// agrega el CSS de la carta 
              divCartasJugadores[turno].append( imgCarta );   
            // divCartasComputadora.append( imgCarta );// muestra la carta en el HTML 

    }

    const determinarGanador = () =>{

        const [ puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() =>{
            if( puntosComputadora == puntosMinimos ){
                alert ('Nadie gana');
            }else if( puntosMinimos > 21 ){
                alert( 'La computadora gana' );
            }else if( puntosMinimos < 21 ){
                alert('El jugador gana')
            }
            else{
                alert('Gana la computadora')
            }
        }, 100);
    }
    // Turno de la compitadora
    
    const turnoComputadora = ( puntosMinimos ) =>{

        let puntosComputadora = 0;
    
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1);
            crearCarta( carta, puntosJugadores.length - 1 )

            // puntosComputadora = puntosComputadora + valorCarta( carta );
            // puntosHTML[1].innerText = puntosComputadora; //en su primera posicion va a ser igual a los puntos del jugador
    
            // const imgCarta = document.createElement('img'); //Crear la constante para la imagen de la carta
            // imgCarta.src = `assets/cartas/${ carta }.png`; //asigna y muestra la carta 
            // imgCarta.classList.add('carta');// agrega el CSS de la carta    
            // divCartasComputadora.append( imgCarta );// muestra la carta en el HTML 
    
            // if (puntosMinimos > 21){
            //     break;
            // }
        } while ( ( puntosComputadora < puntosMinimos ) && ( puntosComputadora <= 21 ) );
        determinarGanador();
    
    }
    
    
    btnPedir.addEventListener('click', () =>{
    
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0 );

        crearCarta( carta, 0 );// Se encarga de colocarlo en el lugar correcto

        // puntosJugador = puntosJugador + valorCarta( carta );
        // puntosHTML[0].innerText = puntosJugador; //en su primera posicion va a ser igual a los puntos del jugador
    
        // const imgCarta = document.createElement('img'); //Crear la constante para la imagen de la carta
        // imgCarta.src = `assets/cartas/${ carta }.png`; //asigna y muestra la carta 
        // imgCarta.classList.add('carta');// agrega el CSS de la carta    
        // divCartasJugador.append( imgCarta );// muestra la carta en el HTML 
    
        if( puntosJugador > 21){
            console.warn('Has perdido');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
    
        }else if ( puntosJugador == 21){
            console.warn('Has Ganado');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
    
        }
    
    });
    
    btnDetener.addEventListener('click', () =>{
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    
        turnoComputadora( puntosJugador );
    })
    
    btnNuevo.addEventListener( 'click', () =>{        
    
         console.clear();
         inicializaJuego();
        //  deck = crearDeck();
        //  puntosJugador = 0;
        //  puntosComputadora = 0;
    
        //  puntosHTML[0].innerText = 0;
        //  puntosHTML[1].innerText = 0;
    
        //  divCartasComputadora.innerHTML = '';
        //  divCartasJugador.innerHTML = '';
    
        //  btnPedir.disabled = false;
        //  btnDetener.disabled = false;
    });

    return{
        nuevoJuego: inicializaJuego
    };

})();



