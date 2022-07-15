import ItemCount from "./ItemCount"
import IrAlCarrito from "./IrAlCarrito"
import { useState, useContext } from "react"
import { contexto } from './CartContext'

const ItemDetail = ({product}) => {
        
    const [compraConfirmada,setCompraConfirmada] = useState(false)
    
    const { addItem } = useContext(contexto)

    const onAdd = (contadorProducto) => {
        if (contadorProducto != 0) {
            addItem(product, contadorProducto)
            setCompraConfirmada(true)
        }
    }       


    return (      
            <div className="itemDetail" key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.pictureUrl} alt={product.title} width="350" />
                <p>{product.description}</p>
                <p>Categoría: {product.categoria}</p>
                <p>Precio: <strong>€ {product.price}</strong></p>
                {!compraConfirmada ? <ItemCount stock={product.stock} initial={0} onAdd={onAdd}/> : <IrAlCarrito />}
            </div>
        )
}

export default ItemDetail