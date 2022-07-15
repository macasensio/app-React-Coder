import { Link } from "react-router-dom";

const BtnFinalizarCompra = () => {    
    return (
        <Link to="/checkout"><button className="btn-proceder-compra">Finalizar compra</button></Link>
    )
}

export default BtnFinalizarCompra