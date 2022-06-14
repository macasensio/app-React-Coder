import ItemCount from "./ItemCount"

const Item = ({id, title, price, description, pictureUrl, stock}) => {
    return (
        <div className="producto" key={id} id={"producto-"+id}>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} width="250" height="150" /><br />
            <p>Precio: ${price}</p>
            <button>Ver más</button>
            {/*<p>{description}</p>
            <ItemCount stock={stock} initial={0} onAdd={() => {}}/>*/}
        </div>
    )
}

export default Item