//import <algoConElNombreQueElijoYo> desde un paquete ya instalado en el node_modules con npm
//el nombre del paquete lo puedo averiguar desde el package.json
// esto del import sería como poner el <script src="react.js"></script> en el index.html


//traigo la librería de React que sirve para hacer la estructura de la app
import React from 'react';

//react-dom sirve para que la app con react se muestre en el DOM
import ReactDOM from 'react-dom/client';

//Agarramos la app que ya exista de REACT
import App from './App'

//importo los estilos
import './styles.css'

//const App = () => 'Hola mundo con JSX y Arrow Function';
/*function App () {
  return 'Hola Mundo'
}*/

//Mostramos la APP en el DOM
//esta línea crea un punto inicial (root) en donde la App se va a mostrar (dibujar). Este root está en el index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
//método render ya existente
root.render(<App />);
