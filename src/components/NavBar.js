import CardWidget from "./CardWidget"


const NavBar = (props) => {
    console.log(props.inHeader)

    return (
        <nav>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            {props.inHeader ? <a href="#"><CardWidget /></a> : <a href="#">Link Footer</a> }            
        </nav>
    )
}

export default NavBar