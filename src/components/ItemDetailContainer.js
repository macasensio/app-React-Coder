import ItemDetail from '../components/ItemDetail'

import { useEffect, useState } from 'react'

import promesaDetailProduct from '../utils/promesaDetailProduct'
import { useParams } from 'react-router-dom'
import LoadingProducts from './LoadingProducts'


const ItemDetailContainer = () => {
    console.log('ItemDetailContainer')

    //useState
    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(() => {
        promesaDetailProduct(parseInt(id))
            .then(resultado => {console.log(resultado);setItem(resultado)})
            .catch(error => console.log(error))
        
    },[])

    return (
        <div id="itemDetailContainer">
            <ItemDetail product={item} />
        </div>
    )
}

export default ItemDetailContainer