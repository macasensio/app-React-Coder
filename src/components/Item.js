import {Link} from 'react-router-dom'

const Item = ({id, title, price, description, pictureUrl, stock}) => {
    return (
        <article className="producto" key={id} id={"producto-"+id}>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} width="250"/><br />
            <p>Precio: ${price}</p>
            <Link to={`/item/${id}`} className="btn-verMas">Ver detalle</Link>
        </article>
    )
}

export default Item