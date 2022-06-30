import { createContext, useState } from 'react'
import ItemDetail from './ItemDetail'

//adentro del contexto puede ir cualquier cosa. objetos, array, etc etc
export const contexto = createContext()
//esto se importa así- -> import { contexto } from './CartContext'
// y de esta forma, lo guardamos en una variable: const resultado = useContext(contexto)

const Provider = contexto.Provider
//el Provider es un componente que viene adentro de un contexto
//se usa así <Provider>
// sirve para:
//1 - determina quienes tienen acceso a la información
//2 - determina el valor del contexto

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])


    //agregar un item al carrito
    const addItem = (producto, cantidad) => {
        
        const copia = [...carrito]
        /*const nuevo_producto = {
            ...producto,
            cantidad: cantidad
        }
        copia.push(nuevo_producto)
        setCarrito(copia)*/
        
        if (isInCart(producto.id)) {
            console.log('el producto ya está en el carrito')
            //actualizar cantidad del producto.id
            
        } else {
            console.log('nuevo producto en el carrito')
            const nuevo_producto = {
                ...producto,
                cantidad: cantidad
            }
            copia.push(nuevo_producto)
            setCarrito(copia)
        }

    }

    //chequear si el item está en el carrito
    const isInCart = (id) => {
        return carrito.find(item => item.id == id)
    }
    
    //contador carrito
    const carritoLenght = () => {
        let cantidadCarrito = 0
        carrito.forEach((item) => {
            cantidadCarrito += item.cantidad
        })
        return cantidadCarrito
    }

    //precio total
    const precioTotal = () => {
        let total = 0
        carrito.forEach((item) => {
            total = total + (item.cantidad * item.price)
        })
        return total
    }

    //eliminar producto
    /*const eliminarProducto = (producto) => {
        //setCarrito
    }*/

    //vaciar carrito
    /*const vaciarCarrito = () => {
        //setCarrito
    }*/

    //esto es lo que voy a pasar!
    const valorDelContexto = {
        carrito: carrito,
        //cantidad_total: cantidad_total,
        //precio_total: precio_total,
        addItem: addItem,
        carritoLenght: carritoLenght,
        precioTotal: precioTotal,
        /* eliminarProducto: eliminarProducto,
        actualizarCantidad: actualizarCantidad,
        vaciarCarrito: vaciarCarrito*/
    }

    return (
        //siempre el prop se llama value
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider

//exporto el contexto en APP porque para esta ocasión, voy a necesitarlo para 2 componentes hijos de app
