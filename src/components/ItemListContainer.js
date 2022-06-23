import ItemList from "./ItemList"
import LoadingProducts from "./LoadingProducts"

import { useEffect, useState } from "react"

import promesaTraerProductos from '../utils/promesaTraerProductos'
import promesaFiltrarCategoria from "../utils/promesaFiltrarCategoria"
import productos from '../utils/productos'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    let categoria = useParams()
    categoria = categoria.categoryId

    useEffect(() => {

        if (!categoria) {
            promesaTraerProductos(1200, productos)
                .then(resultado => {
                    setItems(resultado)
                })
                .catch(error => console.log(error))
        } else {          
            promesaFiltrarCategoria(categoria)
                .then(resultado => setItems(resultado))
                .catch(error => console.log(error))
        }

    }, [categoria])
        

    return (
        <>
            {items.length > 0 ? <div id="div-productos"><ItemList products={items} /></div> : <LoadingProducts />}
        </>
    )
    /*if (items.length > 0) {
        return (
            <div id="div-productos">
                <ItemList products={items} />
            </div>
        )
    } else {
        return (
            <LoadingProducts />
        )
    }*/
    
}

export default ItemListContainer