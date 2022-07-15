import { Link } from "react-router-dom"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Mi Comercio <span className="material-symbols-outlined">home</span></h1>
            </Link>           
            <NavBar inHeader={true} laClase="navbar-header"/>
        </header>
    )
}

export default Header