import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', {price})}/>
        </footer>
        </article>
    )
}