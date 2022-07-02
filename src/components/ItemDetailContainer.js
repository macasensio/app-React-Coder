import ItemDetail from '../components/ItemDetail'

import { useEffect, useState } from 'react'

import promesaDetailProduct from '../utils/promesaDetailProduct'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    //useState
    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(() => {
        promesaDetailProduct(parseInt(id))
            .then(resultado => {setItem(resultado)})
            .catch(error => console.log(error))
        
    },[])

    return (
        <div id="itemDetailContainer">
            <ItemDetail product={item} />
        </div>
    )
}

export default ItemDetailContainer