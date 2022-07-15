import { createContext, useState } from 'react'

export const contexto = createContext()

const Provider = contexto.Provider

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const isInCart = (id) => {
        return carrito.find(item => item.id == id)
    }

    const addItem = (producto, cantidad) => {
        
        const copia = [...carrito]
        
        if (isInCart(producto.id)) {
            actualizarCantidad(producto, cantidad)
            
        } else {
            const nuevoProducto = {
                ...producto,
                cantidad: cantidad
            }
            copia.push(nuevoProducto)
            setCarrito(copia)
        }

    }

    const actualizarCantidad = (producto, cantidad) => {
        const newProducts = carrito.map((item) => {
            if (item.id == producto.id) {
                const newProduct = {
                    ...item,
                    cantidad: item.cantidad + cantidad
                }
                return newProduct
            } else {
                return item
            }
        })
        setCarrito(newProducts)
    }
    
    const carritoLenght = () => {
        let cantidadCarrito = 0
        carrito.forEach((item) => {
            cantidadCarrito += item.cantidad
        })
        return cantidadCarrito
    }

    const precioTotal = () => {
        let total = 0
        carrito.forEach((item) => {
            total = total + (item.cantidad * item.price)
        })
        return total
    }

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter((item) => item.id !== id))
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const valorDelContexto = {
        carrito,
        addItem,
        carritoLenght,
        precioTotal,
        eliminarProducto,
        vaciarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider