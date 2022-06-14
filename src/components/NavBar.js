import CardWidget from "./CardWidget"


const NavBar = (props) => {

    return (
        <nav className={props.laClase}>
            <a href="#">Terrarios</a>
            <a href="#">Exterior</a>
            <a href="#">Interior</a>
            {props.inHeader ? <a href="#"><CardWidget cantProductosCarrito={0}/></a> : <a href="#">Instagram</a> }            
        </nav>
    )
}

export default NavBar