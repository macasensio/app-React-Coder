import {Link} from 'react-router-dom'
import { useContext, useState } from 'react'
import { contexto } from './CartContext'

const CartWidget = () => {
    
    const { carritoLenght, precioTotal } = useContext(contexto)    

    return (
        <Link to="/carrito" id="icon-carrito">
            <span className="material-symbols-outlined">shopping_cart</span>{carritoLenght() > 0 && <span>{carritoLenght()} {`${carritoLenght() != 1 ? "items" : "item"}`} - € {precioTotal()}</span> }
        </Link>
    )
}

export default CartWidget