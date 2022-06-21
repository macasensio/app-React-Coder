import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => { 

    /* ----- STATE PRODUCTO ------ */
    const [contadorProducto, setContadorProducto] = useState(initial)

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

    /* ----- STATE STOCK ------ */
    const [contadorStock, setContadorStock] = useState(stock)

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

    
    const agregarAlCarrito = () => {
        alert('Cantidad de productos añadidos al carrito: '+ contadorProducto);
    }


    return (
        <div>
            <p>Stock disponible: {contadorStock}</p>
            <p>Cantidad seleccionada: {contadorProducto}</p>
            <div id="botones">
                <button onClick={reducirContador}><span className="material-symbols-outlined">remove</span></button>
                <button onClick={agregarAlCarrito}>Agregar al carrito</button>
                <button onClick={aumentarContador}><span className="material-symbols-outlined">add</span></button>
            </div>
        </div>
    )
}

export default ItemCount