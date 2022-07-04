
import { useContext, useState } from "react"
import { contexto } from './CartContext'

import { db } from "../firebaseConfig.js"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Checkout = () => {

    const [data, setData] = useState({nombre: '', email: '', telefono: ''})

    const {carrito, precioTotal, vaciarCarrito} = useContext(contexto)

    const handleChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    //console.log(data)

    const [idCompra, setIdCompra] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('ejecutando handleSubmit')
        
        const orderData = {
            buyer: {
                nombre: data.nombre,
                email: data.email,
                telefono: data.telefono
            },
            carrito,
            total: precioTotal(),
            date: serverTimestamp()
        }
        
        const collectionOrdenes = collection(db, "ordenes")
        const consulta = addDoc(collectionOrdenes, orderData)

        consulta
            .then(resultado => {
                console.log(resultado.id)
                setIdCompra(resultado.id)
                console.log(idCompra)
            })
            .catch(error => {
                console.log(error)
            })

            vaciarCarrito()
    }

    return (
        <>
            { idCompra
            ?<div>
                <p>Gracias por su compra!</p>
                <p>Su número de orden es :{idCompra}</p>
            </div>
            : <div>
                <p>Total a pagar: € {precioTotal()}</p>
                
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="nombre"
                            placeholder="Nombre..."
                            value={data.nombre} />
                    </label>
                    <label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="email"
                            placeholder="Email..."
                            value={data.email} />
                    </label>
                    <label>
                        <input
                                onChange={handleChange}
                                type="text"
                                name="telefono"
                                placeholder="Teléfono..."
                                value={data.telefono} />
                    </label>
                    <button className="btn-proceder-compra">Pagarrrrrrrrrr</button>
            </form>
            </div>  }
        </>     
)

}

export default Checkout