import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'

import { Routes, Route } from 'react-router-dom'

const Main = () => {    

    return (
        <main>
            <Routes>
                <Route path='/' element={<><p>home - item list container</p><ItemListContainer /></>} />
                <Route path='/category/:categoryId' element={<><p>categoría - item list container</p><ItemListContainer /></>} />
                <Route path='/carrito' element={<p>Carrito</p>} />
                <Route path='/item/:id' element={<><p>item detail container</p><ItemDetailContainer /></>} />
            </Routes>
        </main>
    )
}

export default Main

