import CardWidget from "./CardWidget"
import {NavLink} from 'react-router-dom'


const NavBar = (props) => {

    return (
        <nav className={props.laClase}>
            <NavLink to="/category/terrarios">Terrarios</NavLink>
            <NavLink to="/category/exterior">Exterior</NavLink>
            <NavLink to="/category/interior">Interior</NavLink>
            {props.inHeader ? <NavLink to="/carrito"><CardWidget cantProductosCarrito={0}/></NavLink> : ''}            
        </nav>
    )
}

export default NavBar