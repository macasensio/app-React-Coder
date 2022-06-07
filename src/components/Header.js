import NavBar from "./NavBar"

const Header = (props) => {
    console.log(props)

    return (
        <header>
            <h1>Mi Comercio <span class="material-symbols-outlined">home</span></h1>
            <NavBar inHeader={true} laClase="navbar-header"/>
        </header>
    )

}

export default Header