import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import Carrito from './Carrito'
import Checkout from './Checkout'

import { Routes, Route } from 'react-router-dom'

const Main = () => {    

    return (
        <main>
            <Routes>
                <Route path='/' element={<><p>home - item list container</p><ItemListContainer /></>} />
                <Route path='/category/:categoryId' element={<><p>categoría - item list container</p><ItemListContainer /></>} />
                <Route path='/item/:id' element={<><p>item detail container</p><ItemDetailContainer /></>} />
                <Route path='/carrito' element={<><p>carrito</p><Carrito /></>} />
                <Route path='/checkout' element={<><p>checkout</p><Checkout /></>} />
            </Routes>
        </main>
    )
}

export default Main

