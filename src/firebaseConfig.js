import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBV_fVABr-8-ojiJb5KFA2XF9fBXTrDJSA",
  authDomain: "app-react-coderhouse-412f1.firebaseapp.com",
  projectId: "app-react-coderhouse-412f1",
  storageBucket: "app-react-coderhouse-412f1.appspot.com",
  messagingSenderId: "649588591459",
  appId: "1:649588591459:web:a2b0f67dcbe07971d1e156"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const collectionProductos = collection(db, 'productos')

