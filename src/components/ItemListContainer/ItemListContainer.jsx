import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"


const ItemListContainer = ({ greeting }) => {
    const [products, SetProducts] = useState([])
    
    useEffect(() => {
        getProducts()
        .then(response => {
            SetProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

return(
    <div>
        <h2>{greeting}</h2>
        <Itemlist products={products}/>
    </div>
)
}

export default ItemListContainer