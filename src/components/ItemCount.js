import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => { 

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

    return (
        <div>
            <p>Stock disponible: <strong>{contadorStock}</strong></p>
            <p>Cantidad seleccionada: <strong>{contadorProducto}</strong></p>
            <div id="botones">
                <button onClick={reducirContador} className="btn-count"><span className="material-symbols-outlined">remove</span></button>
                <button onClick={aumentarContador} className="btn-count"><span className="material-symbols-outlined">add</span></button>
                <button onClick={() => onAdd(contadorProducto)} className="btn-agregar-carrito">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount