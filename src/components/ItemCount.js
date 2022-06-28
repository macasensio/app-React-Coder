import {useState} from 'react'

import { useContext } from 'react'
import { contexto } from './CartContext'

import { useParams } from 'react-router-dom'

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

    /* ----- CONTEXT - AGREGAR PRODUCTO ------ */

    const resultado = useContext(contexto)
    //console.log('resultado')
    /*console.log(resultado.carrito)
    console.log(resultado)*/
    
    const {id} = useParams()

    const agregarAlCarrito = (e) => {
        if (contadorProducto) {
            console.log('contadorProducto')
            console.log(contadorProducto)
            resultado.addItem(id, contadorProducto)
        } else {
            alert('debe elegir al menos 1 unidad del producto')
        }
    }


    return (
        <div>
            <p>Stock disponible: {contadorStock}</p>
            <p>Cantidad seleccionada: {contadorProducto}</p>
            <div id="botones">
                <button onClick={reducirContador} className="btn-count"><span className="material-symbols-outlined">remove</span></button>
                <button onClick={aumentarContador} className="btn-count"><span className="material-symbols-outlined">add</span></button>
                <button onClick={agregarAlCarrito} className="btn-agregar-carrito">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount