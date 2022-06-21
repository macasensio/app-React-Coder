import {Link} from 'react-router-dom'

const CardWidget = ({cantProductosCarrito}) => {

    return (
        <Link to="/carrito" id="icon-carrito">
            <span className="material-symbols-outlined">shopping_cart</span>{cantProductosCarrito}
        </Link>
    )
}

export default CardWidget