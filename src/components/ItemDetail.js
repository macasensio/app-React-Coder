import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {
    return (
        producto.map(p =>            
            <div className="itemDetail" key={p.id}>
                <h3>{p.title}</h3>
                <img src={p.pictureUrl} alt={p.title} width="250" />
                <p>{p.description}</p>
                <p>Categoría: {p.categoria}</p>
                <p>Precio: ${p.price}</p>
                <ItemCount stock={p.stock} initial={0} onAdd={() => {}}/>
            </div>
        )
    )
}

export default ItemDetail