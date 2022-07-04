import ItemList from "./ItemList"
import LoadingProducts from "./LoadingProducts"

import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import { collectionProductos } from '../firebaseConfig.js'
import { getDocs, collection, query, where } from "firebase/firestore"
//getDocs: sirve para traer muchos documentos de una colección
//getDoc: sirve para traer un documento de una colección
//doc: referencia a un documento de la colección
//query: para hacer filtros
//where: para hacer filtros

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    //const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    console.log('categoryId')
    console.log(categoryId)

    
    useEffect(() => {

        //setLoading(false)

        //collections sirve como query. Traeme todos los documentos de esta db
        //2 parámetros:
        //1 - la base de datos
        //2 - la colección
    
        //1: necesito referencia de la colección
        //const collectionProductos = collection(db,'productos')
        //const filtroDeLaConsulta = query(collectionProductos, where("categoryId", "==", categoryId))
        //2: hago la consulta
        //const consulta = getDocs(collectionProductos)
        
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
                console.log(error)
                //un pop up o algo que muestre el error
            })
        
        //console.log('consulta')
        //console.log(consulta) //-> nos devuelve una promesa

        /*consulta
            .then((resultado) => {
                //console.log('resultado')
                //esto retirna un objeto que adentro tiene un array (docs)
                //console.log(resultado.docs)
                const productos_mapeados = resultado.docs.map(referencia => {
                    //console.log(referencia.id)
                    //console.log(referencia.data()) //el data sería como el responde.json()
                    const aux = referencia.data()
                    aux.id = referencia.id
                    //console.log('aux')
                    //console.log(aux)
                    return aux
                })
                //console.log(productos_mapeados)
                setItems(productos_mapeados)
                
                })

            .catch((error) => {
                console.log(error)
                //un pop up o algo que muestre el error
            })*/

    }, [categoryId])
        

    return (
        <>
            {/*!loading ? <div id="div-productos"><ItemList products={items} /></div> : <LoadingProducts />*/}
            <div id="div-productos"><ItemList products={items} /></div>
        </>
    )
    
}

export default ItemListContainer