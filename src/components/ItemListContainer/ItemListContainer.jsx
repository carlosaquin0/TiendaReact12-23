import { useEffect, useState } from "react"
//import { getProducts } from "../../asyncMock"
import { useParams } from "react-router-dom"

import { getDocs, collection, query, where, QuerySnapshot } from "firebase/firestore"
import { db } from "../../services/firebases/fireBasesConfig"

const ItemListContainer = ({ greeting }) => {
    const [products, SetProducts] = useState([])
    const [loading,  setLoading] = useState(true)

    const { categoryId } = useParams()

    const { showNotification } = useNotification()
    
    useEffect(() =>{
    if(categoryId) document.title = 'Ecommerce ' + categoryId
    
    return()=>{
        document.title = 'Ecommerce'
    }
})

    useEffect(() => {
        setLoading(true)
        
        const productsCollection = categoryId 
        ?query(collection(db, 'products'), where('category', '==', categoryId))
        :collection(db, 'products')

        getDocs(productsCollection)
        .then(QuerySnapshot => {
            const productsAdapted = QuerySnapshot.docs.map(doc =>{
                const fields = doc.data()
                return{ id: doc.id, ...fields}
            })

            SetProducts(productsAdapted)
        })

        .catch(error => {
            showNotification('error', 'Hubo un error')
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return <h1>Cargando los productos...</h1>
    }

return(
    <div>
        <h1>{greeting + (categoryId ?? '')}</h1>
        <Itemlist products={products}/>
    </div>
)
}

export default ItemListContainer