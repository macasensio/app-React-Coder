import ItemDetail from '../components/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collectionProductos } from '../firebaseConfig.js'
import { getDoc, doc } from "firebase/firestore"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(() => {

        const ref = doc(collectionProductos,id)
        getDoc(ref).then((response) => {
            setItem({
                id: response.id,
                ...response.data()
            })
        })        
        
    },[id])

    return (
        <div id="itemDetailContainer" className="padding-borde">
            <ItemDetail product={item} />
        </div>
    )
}

export default ItemDetailContainer