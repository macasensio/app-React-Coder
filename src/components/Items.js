//import ItemCount from "./ItemCount"

const Item = ({id, title, price, pictureUrl}) => {
    return (
        <div key={id}>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} width="250" />
            <p>Precio: ${price}</p>
        </div>
    )
}

export default Item