import { useEffect, useState } from "react"
//import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { db } from "../../services/firebases/fireBasesConfig"
import { getDoc, doc, QueryDocumentSnapshot } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    const { showNotification } = useNotification()
    
    useEffect(()=> {
        if(product) document.title = product.name
        
        return()=>{
            document.title = 'Ecommerce'
        }
    })

    useEffect(() => {
        setLoading(true)
         
        const productDocument = doc(db, 'product', productId)

        getDoc(productDocument)
        .then(QueryDocumentSnapshot=>{
            const fields = QueryDocumentSnapshot.data()
            const productsAdapted = { id: QueryDocumentSnapshot.id, ...fields}
            setProduct(productsAdapted)
        })
        .catch(error=>{
            showNotification('error', 'Hubo un error')
        })

        .finally(()=> {
            setLoading(false)
        })
      
    }, [productId])

    if(loading) {
        return<h1>Cargando el producto...</h1>
    }

    if(!product) {
        return <h1>El producto no existe</h1>
    }

    return(
        <div className="ItemDetailContainer">
            <h1>Detalle</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer