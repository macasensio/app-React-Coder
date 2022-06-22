import ItemCount from "./ItemCount"

const ItemDetail = ({product}) => {
    console.log(ItemDetail)
    return (
        //producto.map(p =>            
            <div className="itemDetail" key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.pictureUrl} alt={product.title} width="250" />
                <p>{product.description}</p>
                <p>Categoría: {product.categoria}</p>
                <p>Precio: ${product.price}</p>
                <ItemCount stock={product.stock} initial={0} onAdd={() => {}}/>
            </div>
        )
    //)
}

export default ItemDetail