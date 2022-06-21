import productos from "./productos"

const promesaFiltrarCategoria = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoryId))
        }, 150)
    })
}

export default promesaFiltrarCategoria