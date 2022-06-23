import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom'

import { useState, useEffect } from "react"

const ItemDetail = ({product}) => {
    
    
    const [compraConfirmada,setcompraConfirmada] = useState(false)

    const onAdd = (cantidadSeleccionada) => {
        if (cantidadSeleccionada == 0) {
            alert('debe elegir al menos 1 unidad del producto')
        } else  {
            console.log('cantidadSeleccionada -> '+cantidadSeleccionada)
            setcompraConfirmada(true)
        }
    }


    return (      
            <div className="itemDetail" key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.pictureUrl} alt={product.title} width="100%" />
                <p>{product.description}</p>
                <p>Categoría: {product.categoria}</p>
                <p>Precio: ${product.price}</p>
                {!compraConfirmada ? <ItemCount stock={product.stock} initial={0} onAdd={onAdd}/> : 
                <Link to="/checkout"><button>Proceder con la compra</button></Link>}
            </div>
        )
}

export default ItemDetail