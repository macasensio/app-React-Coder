import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {

    const stock = prompt('Cantidad de productos')

    return (
        <div id="greeting">
            <h2>{props.greeting +' '+props.nombre}</h2>
            <ItemCount stock={stock} initial={0} onAdd={() => {}}/>
        </div>
    )
}

export default ItemListContainer