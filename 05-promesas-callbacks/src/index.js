import { buscarHeroe } from './js/callbacks'
import './styles.css';

const heroeId = 'Capi';


buscarHeroe( heroeId, ( heroe)  => {
    console.log( heroe);
});