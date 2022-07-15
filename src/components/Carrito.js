import BtnFinalizarCompra from './BtnFinalizarCompra'
import { useContext } from 'react'
import { contexto } from './CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const {carrito, precioTotal, eliminarProducto, vaciarCarrito} = useContext(contexto)

    return (
        
        <>
            { carrito.length
                ? carrito.map(item => (           
                        <div className='producto-carrito' key={item.id}>
                            <h3>{item.title}</h3>
                            <img src={item.pictureUrl} alt={item.title} width="250" />
                            <p>Cantidad de productos: {item.cantidad}</p>
                            <p>Precio por unidad: € {item.price}</p>
                            <p>Precio total: € {item.price*item.cantidad}</p>
                            <button className="btn-proceder-compra" onClick={() => {eliminarProducto(item.id)}}>Eliminar</button>
                            <hr></hr>
                        </div>
                    )
                )
                : <>
                    <p className="padding-borde">Tu carrito está vacío, <Link to="/">ve a comprar algo!</Link></p>
                </>

            }
            { carrito.length ?
                <>
                    <p>Total = € {precioTotal()}</p>
                    <button className="btn-proceder-compra" onClick={vaciarCarrito}>Vaciar carrito</button>
                    <BtnFinalizarCompra /> 
                </>
            : null }        
        </>

    )
    
}

export default Carrito