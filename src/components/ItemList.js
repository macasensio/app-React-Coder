import Item from "./Item"

const ItemList = ({products}) => {
    return (
        products.map(p =>
            <Item
                key={p.id}
                /*id={p.id}
                title={p.title}
                price={p.price}
                pictureUrl={p.pictureUrl}
                description={p.description}
                stock={p.stock}*/

                //o con el spread operator, quedaría: que le estamos diciendo que reciba como key el p.id y luego, que reciba el resto
                // key={p.id}
                {...p}
            />
        )
    )
}

export default ItemList