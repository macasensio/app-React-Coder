// Import the functions you need from the SDKs you need
//1) me trae el método de autenticación con firebase
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//2) traigo los keys privados de la plataforma web
const firebaseConfig = {
  apiKey: "AIzaSyBV_fVABr-8-ojiJb5KFA2XF9fBXTrDJSA",
  authDomain: "app-react-coderhouse-412f1.firebaseapp.com",
  projectId: "app-react-coderhouse-412f1",
  storageBucket: "app-react-coderhouse-412f1.appspot.com",
  messagingSenderId: "649588591459",
  appId: "1:649588591459:web:a2b0f67dcbe07971d1e156"
};

// Initialize Firebase
//3)Me autentico usando el método del paso 1 y los keys del 2
const app = initializeApp(firebaseConfig);

//4) Obtener una referencia/puntero a la base de datos
export const db = getFirestore(app)
export const collectionProductos = collection(db, 'productos')

