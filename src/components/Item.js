import ItemCount from "./ItemCount"

const Item = ({id, title, price, description, pictureUrl, stock}) => {
    return (
        <div class="producto" key={id} id={"producto-"+id}>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} width="250" height="150" />
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <ItemCount stock={stock} initial={0} onAdd={() => {}}/>
            <button>Ver más</button>
        </div>
    )
}

export default Item