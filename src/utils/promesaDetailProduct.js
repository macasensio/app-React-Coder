import productos from "./productos"

const promesaDetailProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 150)
    })
}

export default promesaDetailProduct