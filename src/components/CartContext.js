import { createContext, useState } from 'react'

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

    const [carrito, setCarrito] = useState([{}])
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)

    const addItem = (producto, cantidad) => {
        //setCarrito
        const copia = [...carrito]
        console.log('copia')
        console.log(copia)
        const nuevo_producto = {
            ...producto,
            cantidad: cantidad
        }
        //console.log(nuevo_producto.cantidad)
        copia.push(nuevo_producto)

        setCarrito(copia)

        //console.log('addItem ejecutandose')
        //console.log(producto, cantidad)

    }

    /*****const eliminarProducto = (producto) => {
        //setCarrito
    }
    const actualizarCantidad = (producto, cantidad) => {
        //setCarrito
    }
    const vaciarCarrito = () => {
        //setCarrito
    }*****/

    //const valorDelContexto = []
    /*const valorDelContexto = {
        carrito: {},
        usuario: {},
        mensajes: []
    }*/

    //esto es lo que voy a pasar!
    const valorDelContexto = {
        carrito: carrito,
        cantidad_total: cantidad_total,
        precio_total: precio_total,
        addItem: addItem,
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
