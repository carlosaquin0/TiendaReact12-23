import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const cart = () =>{
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <link to='/' className="Option">Productos</link>
            </div>
        )
    } 


return (
    <div>
        { cart.map(p => <CartItem key={p.id}{...p}/>)}
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="Button">Limpíar carrito</button>
        <link to='/checkout' className="Option">Checkout</link>
    </div>
)
}