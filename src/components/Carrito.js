import { Link } from 'react-router-dom'

const Carrito = () => {
    return (
        <>
            <h2>Carrito</h2>
            <Link to="/checkout">Proceder con la compra</Link>
        </>
    )
}

export default Carrito