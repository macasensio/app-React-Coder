import ItemCount from "./ItemCount"
import {useState} from 'react'
import {useEffect} from "react"
import ItemList from "./ItemList"
import customFetch from "../utils/fetch"
import productos from "../utils/productos"

const ItemListContainer = (props) => {   

    //useEffect: nos permite ejecutar una función SIEMPRE después de cada renderizado
    //useEffeect(function, [array])
    //la función puede hacer lo que queramos y si o si tiene que estar. Se puede prescindir del 2do argumento (el array)
    //el 2do parámetro es un array, que se le llama "array de dependencia" que significa que el efecto para ejecutarse depende del array, no del ciclo de vida del componente
    //o sea que el efecto va a fijarse en el array si tiene cambios o no

    const [items, setItems] = useState([])//le digo que arranca com un array vacío

    useEffect(() => {

        customFetch(() => {
            customFetch(3000, productos)
            .tehn(resultado => setItems(resultado))
        }, [items])
        
        //setTimeout(function,number)
        setTimeout(() => {
            console.log('pidiendo productos...')
            const productosDeDB = ['producto 1', 'producto 2', 'producto 3']
            setItems(productosDeDB)
        },2000)

    },[])

    const onAdd = () => {   }

    if (items.length > 0){
        //const stock = prompt('Cantidad de productos')
        const stock = 5;
        return (
            <div id="greeting">
                <h2>{props.greeting +' '+props.nombre}</h2>
                <ItemCount stock={stock} initial={0} onAdd={onAdd}/>

                <ItemList />
                
            </div>
        )
    } else {
        return (
            <div id="greeting">
                <h2>{props.greeting +' '+props.nombre}</h2>
                <p>Cargando...</p>
            </div>
        )
    }




    
}

export default ItemListContainer

//container
//1- el catálogo de productos
//2- el 1er presentacional va a recibir el array de productos y lo que va a hacer es ir mapeando (arrar.map())y por cada vuelta que de muestra uno. El del medio reparte
//3- el 2do presentacional es cada tarjetida ejecutándose