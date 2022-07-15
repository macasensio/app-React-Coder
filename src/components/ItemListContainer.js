import ItemList from "./ItemList"
import LoadingProducts from "./LoadingProducts"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collectionProductos } from '../firebaseConfig.js'
import { getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    
    useEffect(() => {
        setLoading(false)
        
        const ref = categoryId
        ? query(collectionProductos, where("category", "==", categoryId))
        : collectionProductos

        getDocs(ref)
            .then((resultado) => {
                const products = resultado.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems(products)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [categoryId])
        

    return (
        <>
            {!loading ? <div id="div-productos"><ItemList products={items} /></div> : <LoadingProducts />}
        </>
    )
    
}

export default ItemListContainer