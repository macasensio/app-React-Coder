import NavBar from "./NavBar"

const Header = () => {

    const User = true;

    if(!User){
        return (
            <header>
                <h1>Título</h1> 
                <NavBar />           
            </header>
        )
    } else {
        return (
            <header>
                <h1>Titulo</h1>
                <a href="#">Iniciar sesión</a>        
            </header>
        )
    }    

}

export default Header