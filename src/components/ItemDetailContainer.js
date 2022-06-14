import ItemDetail from '../components/ItemDetail'

import { useEffect, useState } from 'react'

import promesaDetailProduct from '../utils/promesaDetailProduct'
import producto from '../utils/producto'


const ItemDetailContainer = () => {

    //useState
    const [item, setItem] = useState({})

    useEffect(() => {
        promesaDetailProduct(3000, producto)
        //then -> entonces
        //le digo que con el resultado que reciba modifique mi estado (array vacío) con el resultado
        .then(resultado => setItem(resultado))
        .catch(error => console.log(error))
    }, [item])
    console.log(item)

    if (item.length > 0) {
        return (
            <div id="itemDetailContainer">
                <ItemDetail producto={item} />
            </div>
        )
    } 
}

export default ItemDetailContainer