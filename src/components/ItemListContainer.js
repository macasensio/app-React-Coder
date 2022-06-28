import ItemList from "./ItemList"
import LoadingProducts from "./LoadingProducts"

import { useEffect, useState } from "react"

import promesaTraerProductos from '../utils/promesaTraerProductos'
import promesaFiltrarCategoria from "../utils/promesaFiltrarCategoria"
import productos from '../utils/productos'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    let categoria = useParams()
    categoria = categoria.categoryId

    useEffect(() => {

        setLoading(true)

        if (!categoria) {
            promesaTraerProductos(1200, productos)
                .then(resultado => {
                    setItems(resultado)
                    setLoading(false)
                })
                .catch(error => console.log(error))
        } else {          
            promesaFiltrarCategoria(categoria)
                .then(resultado => {
                    setItems(resultado)
                    setLoading(false)
            })
                .catch(error => console.log(error))
        }

    }, [categoria])
        

    return (
        <>
            {!loading ? <div id="div-productos"><ItemList products={items} /></div> : <LoadingProducts />}
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