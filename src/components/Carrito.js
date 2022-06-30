import BtnFinalizarCompra from './BtnFinalizarCompra'
import { useContext } from 'react'
import { contexto } from './CartContext'

const Carrito = () => {

    const {carrito, precioTotal} = useContext(contexto)
    /*console.log('resultado')
    console.log(resultado.carrito.title)
    console.log(resultado)*/


    ///const {carrito} = useContext(contexto)
    
    //recorrer array carrito e imprimir

    // if carrito está vacío, que muestre un btn "anda a comprar" else  muestra el array

    console.log('carrito en carrito = ')
    console.log(carrito)
    return (
        /*<>
            <div className='producto-carrito'>
                <h3>title: title</h3>
                <img src="product.pictureUrl" alt="product.title" width="100%" />
                <p>Cantidad de productos: cantidad_total</p>
                <p>Precio: product.price</p>
            </div>
            <p>Precio total: precio_total</p><BtnFinalizarCompra />
        </>*/

        <>
        { carrito.length
            ? carrito.map(item => (
                console.log('item: '),
                console.log(item),                
                    <div className='producto-carrito'>                  
                        <h3>title: {item.title}</h3>
                        <img src={item.pictureUrl} alt={item.title} width="200" />
                        <p>Cantidad de productos: {item.cantidad}</p>
                        <p>Precio por unidad: {item.price}</p>
                        <p>Precio total: {item.price*item.cantidad}</p>
                    </div>
                )
            )
            : <p>tu carrito está vacío</p>

        }
        { carrito.length ?
            <>
                <p>Total = ${precioTotal()}</p>
                <BtnFinalizarCompra /> 
            </>
        : null }
        
        </>

    )
    
}

export default Carrito