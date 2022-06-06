import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer";

const Header = (props) => {
    console.log(props)

    return (
        <header>
            <h1>Mi Comercio</h1>
            <NavBar inHeader={true}/>
        </header>
    )

}

export default Header