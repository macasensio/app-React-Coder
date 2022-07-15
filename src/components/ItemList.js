import Item from "./Item"

const ItemList = ({products}) => {
    return (
        products.map(p =>
            <Item
                key={p.id}
                {...p}
            />
        )
    )
}

export default ItemList