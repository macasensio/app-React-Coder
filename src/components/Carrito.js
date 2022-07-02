import BtnFinalizarCompra from './BtnFinalizarCompra'
import { useContext } from 'react'
import { contexto } from './CartContext'

import  { Link } from 'react-router-dom'

const Carrito = () => {

    const {carrito, precioTotal, eliminarProducto, vaciarCarrito} = useContext(contexto)
    /*console.log('resultado')
    console.log(resultado.carrito.title)
    console.log(resultado)*/


    ///const {carrito} = useContext(contexto)
    
    //recorrer array carrito e imprimir

    // if carrito está vacío, que muestre un btn "anda a comprar" else  muestra el array

    console.log('carrito en carrito = ')
    console.log(carrito)
    return (
        
        <>
            { carrito.length
                ? carrito.map(item => (
                    console.log('item: '),
                    console.log(item),                
                        <div className='producto-carrito'>
                            <h3>{item.title}</h3>
                            <img src={item.pictureUrl} alt={item.title} width="200" />
                            <p>Cantidad de productos: {item.cantidad}</p>
                            <p>Precio por unidad: {item.price}</p>
                            <p>Precio total: {item.price*item.cantidad}</p>
                            <button className="btn-proceder-compra" onClick={() => {eliminarProducto(item.id)}}>Eliminar</button>
                            <hr></hr>
                        </div>
                    )
                )
                : <>
                    <p>Tu carrito está vacío, <Link to="/">ve a comprar algo!</Link></p>
                </>

            }
            { carrito.length ?
                <>
                    <p>Total = ${precioTotal()}</p>
                    <button className="btn-proceder-compra" onClick={vaciarCarrito}>Vaciar carrito</button>
                    <BtnFinalizarCompra /> 
                </>
            : null }        
        </>

    )
    
}

export default Carrito