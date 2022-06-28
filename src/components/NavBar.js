import CartWidget from "./CartWidget"
import {NavLink} from 'react-router-dom'


const NavBar = (props) => {

    return (
        <nav className={props.laClase}>
            <NavLink to="/category/terrarios">Terrarios</NavLink>
            <NavLink to="/category/exterior">Exterior</NavLink>
            <NavLink to="/category/interior">Interior</NavLink>
            {props.inHeader ? <NavLink to="/carrito"><CartWidget /></NavLink> : null}            
        </nav>
    )
}

export default NavBar