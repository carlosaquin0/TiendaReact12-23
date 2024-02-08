import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const[quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const Item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    
    return (
        <article className="CardItem"> 
        <header className="header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="itemImg" />
        </picture>
        <section>
            <p className='info'>
                Categoria: {category}
            </p>
            <p className='info'>
                Descripcion: {description}
            </p>
            <p className='info'>
                Precio: ${price}
            </p>
        </section> 
        <footer className='ItemFooter'>
            {
                quantityAdded > 0 ? (
                    <link to='/cart' className='Option'>Terminar Compra</link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
            
        </footer>
        </article>
    )
}