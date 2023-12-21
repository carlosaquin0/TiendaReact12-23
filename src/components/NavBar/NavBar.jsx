import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>  {
    return  (
        <nav> 
        <h1>Ecommerce</h1>
        <div>
        <button>Celulares</button>
        <button>Tablets</button>
        <button>Notebooks</button>
        </div>
        <CartWidget/>
        </nav>
    
    )
}

export default NavBar

