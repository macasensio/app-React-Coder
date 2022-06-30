import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { contexto } from './CartContext'

//para chequear si hay duplicados, ir recorriendo lo que ya hay
/*arrayDeProductos.forEach(producto =>
    if(producto.id == id){

    }else{

    })*/

const CartWidget = () => {

    const { cantidad_total, carritoLenght } = useContext(contexto)
    //console.log(resultado)
    // console.log('carrito -> ')
    // console.log(resultado.carrito)
    // console.log('cantidad_total -> ' +resultado.cantidad_total)
    // console.log('precio_total -> ' +resultado.precio_total)



    return (
        <Link to="/carrito" id="icon-carrito">
            <span className="material-symbols-outlined">shopping_cart</span>{carritoLenght()}
        </Link>
    )
}

export default CartWidget