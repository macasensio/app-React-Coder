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

    if (item.length > 0) {
        console.log('item.length > 0')
        return (
            <div id="itemDetailContainer">
                <ItemDetail product={item} />
            </div>
        )
    } else {
        console.log('item.length < 0')
        return (
            <LoadingProducts />
        )
    }
}

export default ItemDetailContainer