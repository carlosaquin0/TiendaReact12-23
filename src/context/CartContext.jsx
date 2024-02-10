import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])

    console.log(cart)

    const addItem = (item, quantity) =>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item,quantity}])
        } else{
            console.error('El producto ya fue agregado')
        }
    }
}

const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
}

const getTotalQuantity = ()=> {
    let accu=0
    cart.forEach(prod =>{
        accu += prod.quantity
    })
    
    return accu
}

const totalQuantity =getTotalQuantity()

const getTotal = ()=>{
  let accu=0

  cart.forEach(prod=>{
    accu += prod.quantity * prod.price
  })

  return accu
}

const total = getTotal()

const clearCart = () => {
    setCart([])
}

const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
}

return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart }}>
        {children}
    </CartContext.Provider>
)