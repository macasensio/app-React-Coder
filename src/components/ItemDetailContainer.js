import ItemDetail from '../components/ItemDetail'

import { useEffect, useState } from 'react'

//import promesaDetailProduct from '../utils/promesaDetailProduct'
import { useParams } from 'react-router-dom'

import { collectionProductos } from '../firebaseConfig.js'
import { collection, getDoc, doc } from "firebase/firestore"


const ItemDetailContainer = () => {

    //useState
    const [item, setItem] = useState({})
    const {id} = useParams()
    console.log('id')
    console.log(id)
    console.log('------------')

    useEffect(() => {


        const ref = doc(collectionProductos,id)
        console.log(ref)
        getDoc(ref).then((response) => {
            setItem({
                id: response.id,
                ...response.data()
            })
        })
        /*const consulta = getDoc(refeDelDoc)

        consulta
            .then(resultado => {
                //console.log(resultado.id)
                //console.log(resultado.data())
                const producto = resultado.data()
                setItem(producto)
            })
            .catch((error) => {
                console.log(error)
                //un pop up o algo que muestre el error
            })*/
        //2: hago la consulta
        //const consulta = getDoc(collectionProductos)
        /*promesaDetailProduct(parseInt(id))
            .then(resultado => {setItem(resultado)})
            .catch(error => console.log(error))*/

            /*consulta
            .then((resultado) => {
                const productos_mapeados = resultado.docs.map(referencia => {
                    //creo un nuevo objeto con la info dem.data
                    const aux = referencia.data()
                    //le agrego a ese objeto el .id
                    aux.id = referencia.id
                    return aux
                    })
                console.log(productos_mapeados)
                //setItems(productos_mapeados)

                const producto_mapeado = productos_mapeados.filter(item => item.id == id)
                console.log('producto_mapeado')
                console.log(producto_mapeado)
                console.log('---------------------')
                setItem(producto_mapeado)
                })

            .catch((error) => {
                console.log(error)
                //un pop up o algo que muestre el error
            })*/

        
    },[id])

    console.log('itemmmm')
    console.log(item)

    return (
        <div id="itemDetailContainer">
            <ItemDetail product={item} />
        </div>
    )
}

export default ItemDetailContainer