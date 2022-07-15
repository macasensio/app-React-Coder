import { useContext } from 'react'
import { contexto } from './CartContext'

const CartWidget = () => {
    
    const { carritoLenght, precioTotal } = useContext(contexto)    

    return (
        <span id="icon-carrito">
            <span className="material-symbols-outlined">shopping_cart</span>{carritoLenght() > 0 && <span>{carritoLenght()} {`${carritoLenght() != 1 ? "items" : "item"}`} - € {precioTotal()}</span> }
        </span>
    )
}

export default CartWidget