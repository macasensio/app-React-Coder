import ItemList from "./ItemList"
import LoadingProducts from "./LoadingProducts"

import { useEffect, useState } from "react"

import promesaProductos from '../utils/promesaProductos'
import productos from '../utils/productos'

const ItemListContainer = ({greeting, nombre}) => {


    //const stock = prompt('Cantidad de productos')

    //useState
    //como sabemos que esto va a cambiar (tener un estado inicial y luego va a cambiar) vamos a usar useState
    //1ero vamos a tener un array vacío, luego después de x cantidad de segundo, recibimos el array
    const [items, setItems] = useState([])

    //useEffect
    //usamos el useEffect para que cuando esto se monte, caiga la promesa que estamos pidiendo
    useEffect(() => {
        promesaProductos(3000, productos)
        //then -> entonces
        //le digo que con el resultado que reciba modifique mi estado (array vacío) con el resultado
        .then(resultado => setItems(resultado))
    }, [items])
    console.log(items)

    if (items.length > 0) {
        return (
            <>
                <div id="greeting">
                    <h2>{greeting +' '+nombre}</h2>
                </div>
                <div id="div-productos">
                    <ItemList products={items} />
                </div>
            </>
        )
    } else {
        return (
            <LoadingProducts />
        )
    }
    
}

export default ItemListContainer