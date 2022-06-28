import ItemCount from "./ItemCount"
import BtnFinalizarCompra from "./BtnFinalizarCompra"
import { useState, useContext } from "react"
import { contexto } from './CartContext'

const ItemDetail = ({product}) => {
        
    const [compraConfirmada,setCompraConfirmada] = useState(false)
    
    //contexto
    //addItem() y vaciarProducto() cuando clickeo BtnFinalizarCompra
    const { addItem } = useContext(contexto)

    const onAdd = (cantidadSeleccionada) => {
        if (cantidadSeleccionada == 0) {
            alert('debe elegir al menos 1 unidad del producto')
        } else  {
            addItem(product, cantidadSeleccionada)
            setCompraConfirmada(true)
        }
    }    

    return (      
            <div className="itemDetail" key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.pictureUrl} alt={product.title} width="100%" />
                <p>{product.description}</p>
                <p>Categoría: {product.categoria}</p>
                <p>Precio: ${product.price}</p>
                {!compraConfirmada ? <ItemCount stock={product.stock} initial={0} onAdd={onAdd}/> : <BtnFinalizarCompra />}
            </div>
        )
}

export default ItemDetail