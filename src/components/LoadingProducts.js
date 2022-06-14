import bart from '../assets/loading-bart.jpg'
//import loading from '../assets/loading.gif'

const LoadingProducts = () => {
    return (
        <div className="cargaProductos">
            <h2>Cargando productos...</h2>
            <img src={bart} alt="Bart esperando" width="250"/>
        </div>
    )
}

export default LoadingProducts