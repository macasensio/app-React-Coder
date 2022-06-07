import CardWidget from "./CardWidget"


const NavBar = (props) => {

    return (
        <nav className={props.laClase}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            {props.inHeader ? <a href="#"><CardWidget cantProductosCarrito={0}/></a> : <a href="#">Link Footer</a> }            
        </nav>
    )
}

export default NavBar