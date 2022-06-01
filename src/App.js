//const App = () => 'Hola mundo con JSX y Arrow Function'
//esto en la consola no tiene etiqueta ni nada.


//en JSX
/*const App = () => {
    return <p>Hola Mundo</p>
    
}*/
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

//fragmento: es una etiqueta que no tiene nombre. Nos permite encapsular muchas etiquetas. En el DOM no se ve.
const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}


export default App
//hay que exportar la variable. Hay 2 maneras:

//1 - export default variable -> este solo se puede exportar una sola vez por archivo. Esta hace que al importarla se llame con el mismo nombre: import App from 'algo'

//2 - export variable
//se importa con llave -> import {App} from 'algo'
