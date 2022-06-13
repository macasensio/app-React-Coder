import NavBar from "./NavBar"

const Header = () => {

    return (
        <header>
            <h1>Mi Comercio <span className="material-symbols-outlined">home</span></h1>
            <NavBar inHeader={true} laClase="navbar-header"/>
        </header>
    )

}

export default Header