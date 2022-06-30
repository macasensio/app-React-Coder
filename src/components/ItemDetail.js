import ItemCount from "./ItemCount"
import IrAlCarrito from "./IrAlCarrito"
import { useState, useContext } from "react"
import { contexto } from './CartContext'

const ItemDetail = ({product}) => {
        
    const [compraConfirmada,setCompraConfirmada] = useState(false)
    
    //contexto
    //addItem() y vaciarProducto() cuando clickeo IrAlCarrito
    const { addItem } = useContext(contexto)

    const onAdd = (contadorProducto) => {
        if (contadorProducto == 0) {
            alert('Debe elegir al menos 1 unidad del producto')
        } else  {
            addItem(product, contadorProducto)
            setCompraConfirmada(true)
            console.log('product:')
            console.log(product)
            console.log('contadorProducto: '+contadorProducto)
        }

    }
        
        

    return (      
            <div className="itemDetail" key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.pictureUrl} alt={product.title} width="450" />
                <p>{product.description}</p>
                <p>Categoría: {product.categoria}</p>
                <p>Precio: ${product.price}</p>
                {!compraConfirmada ? <ItemCount stock={product.stock} initial={0} onAdd={onAdd}/> : <IrAlCarrito />}
            </div>
        )
}

export default ItemDetail