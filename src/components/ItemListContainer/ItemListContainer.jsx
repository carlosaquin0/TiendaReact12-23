import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {
    const [products, SetProducts] = useState([])

    const { categoryId } = useParams()
    
    useEffect(() => {
        getProducts()
        .then(response => {
            SetProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])

return(
    <div>
        <h2>{greeting}</h2>
        <Itemlist products={products}/>
    </div>
)
}

export default ItemListContainer