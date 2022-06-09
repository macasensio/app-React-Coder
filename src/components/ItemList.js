//import Item from "./Item"
import producto1 from '../assets/producto1.jpg'
import producto2 from '../assets/producto2.jpg'
import producto3 from '../assets/producto3.jpg'

const ItemList = ({products}) => {
    return (
        <p>ItemList</p>
        /*<div id="div-productos">
            <Item key={1} title={'Producto 1'} price={560} pictureUrl={producto1}/>
            <Item key={2} title={'Producto 2'} price={980} pictureUrl={producto2}/>
            <Item key={3} title={'Producto 3'} price={400} pictureUrl={producto3}/>
        </div>*/

        /* products.map(p => {
            <Item
                key={}
                title={}
                price={}
                pictureUrl={}

                //o con el spread operator, quedaría:
                // key={p.id} {...p}
            />
        })*/

    )

}

export default ItemList