const CartView = ()=>{

    const {cart, total, removeItem} = useCart()

     return(
        <div>
            <section>
            <h1>CART</h1>
            {
                cart.map(prod => {
                    return(
                        <div key={prod.id}>
                            <h3>{prod.name}</h3>
                            <h4>Cantidad: {prod.quantity}</h4>
                            <h4>Precio por unidad: ${prod.price}</h4>
                            <h4>Subtotal: ${prod.quantity * prod.price}</h4>
                            <button onClick={()=> removeItem(prod.id)}>Remover</button>
                            </div>
                    )
                })
            }
            </section>
            <section>
                <h1>Total: ${total}</h1>
            </section>
            <section>
                <link to='/checkout'>Checkout</link>
            </section>
        </div>
        
     )
}

export default CartView