//const App = () => 'Hola mundo con JSX y Arrow Function'
//esto en la consola no tiene etiqueta ni nada.


//en JSX
/*const App = () => {
    return <p>Hola Mundo</p>
    
}*/
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

import { BrowserRouter } from 'react-router-dom'
import MiProvider from './components/CartContext'

const App = () => {
    return (
        <BrowserRouter>
            <MiProvider>
                <Header/>            
                <Main />
            </MiProvider>
            <Footer />
        </BrowserRouter>
    )
}


export default App
//hay que exportar la variable. Hay 2 maneras:

//1 - export default variable -> este solo se puede exportar una sola vez por archivo. Esta hace que al importarla se llame con el mismo nombre: import App from 'algo'

//2 - export variable
//se importa con llave -> import {App} from 'algo'
