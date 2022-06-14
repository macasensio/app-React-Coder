//esta promesa va a recibir 2 productos
const promesaDetailProduct = (time, task) => {
    //promesa
    //la promesa tiene que resolver algo, tenemos que decirle qué hacer
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(task)
        }, time)
    })
}

export default promesaDetailProduct;