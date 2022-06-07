import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    //el useState() siempre da un array
    //el array tiene 2 cosas adentro:
    //1 - la primera posición es el lugar donde está mi estado
    //2 - una función anónima que permite modificar al estado en sí
    //convencionalmente, las funciones arrancan con "set"

    //resultado es la variable donde guardamos nuestro estado, es el estado inicial
    

    //haciendo destructuring, en una línea queda así:
    //const [contadorProducto, setContador] = useState(0)

    // ------------  STATE PRODUCTO  ------------
    const stateProducto = useState(initial)
    const contadorProducto = stateProducto[0] //mi estado
    const setContadorProducto = stateProducto[1] //función que me permite cambiar el estado

    const aumentarContador = () => {
        if (contadorProducto < stock) {
            setContadorProducto(contadorProducto + 1)
            reducirStock()
        }
    }
    const reducirContador = () => {
        if (contadorProducto > 0) {
            setContadorProducto(contadorProducto - 1)
            aumentarStock()
        }
    }

    // ------------  STATE STOCK ------------
    const stateStock = useState(stock)
    const contadorStock = stateStock[0]
    const setContadorStock = stateStock[1]

    const reducirStock = () => {
        if (contadorStock > 0) {
            setContadorStock(contadorStock - 1)
        }
    }

    const aumentarStock = () => {
        if (contadorStock < stock) {
            setContadorStock(contadorStock + 1)
        }
    }

    // ------------  AGREGAR AL CARRITO ------------
    const agregarAlCarrito = () => {
        alert('Cantidad de productos añadidos al carrito: '+ contadorProducto);
    }


    return (
        <div id="producto">
            <p>Stock disponible: {contadorStock}</p>
            <p>Cantidad de producto seleccionado: {contadorProducto}</p>
            <button onClick={aumentarContador}><span className="material-symbols-outlined">add</span></button>
            <button onClick={reducirContador}><span className="material-symbols-outlined">remove</span></button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount