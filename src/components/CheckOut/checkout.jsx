import {useCart} from "../../context/cartContext"
import { db } from "../../services/firebases/fireBasesConfig"
import { getDoc, query } from "firebase/firestore"

const CheckOut = ()=> {
    const{cart} = useCart()

    const createOrder =()=>{
        const objOrder = {
            buyer: useRouteLoaderData,
            items: cart,
        }
    }
    return(
        <>
        <h1>CHECKOUT</h1>
        <OrderForm onCreate={createOrder}/>
        </>
    )
}