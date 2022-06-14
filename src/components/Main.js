
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'

const Main = () => {    

    return (
        <main>
            <ItemListContainer
                greeting="Bienvenid@" 
                nombre="{nombre}" 
            />
            <ItemDetailContainer />
        </main>
    )
}

export default Main

