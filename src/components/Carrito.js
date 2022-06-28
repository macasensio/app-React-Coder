import BtnFinalizarCompra from './BtnFinalizarCompra'
import { useContext } from 'react'
import { contexto } from './CartContext'

const Carrito = () => {

    const resultado = useContext(contexto)
    /*console.log('resultado')
    console.log(resultado.carrito.title)
    console.log(resultado)*/


    ///const {carrito} = useContext(contexto)
    
    //recorrer array carrito e imprimir

    // if carrito está vacío, que muestre un btn "anda a comprar" else  muestra el array
    return (
        <>
            <div className='producto-carrito'>
                <h3>title: {resultado.mac}</h3>
                <img src="product.pictureUrl" alt="product.title" width="100%" />
                <p>Cantidad de productos: cantidad_total</p>
                <p>Precio: product.price</p>
            </div>
            <p>Precio total: precio_total</p>
            <BtnFinalizarCompra />
        </>
    )
}

export default Carrito