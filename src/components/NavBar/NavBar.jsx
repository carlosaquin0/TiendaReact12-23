import { NavLink, link} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>  {
    return  (
        <nav className="NavBar"> 
        <link to='/'>
        <h3>Ecommerce</h3>
        </link>  
        <div className="Categories">
        <NavLink to={`/category/celular`} className={({ isActive}) => isActive? 'ActiveOption': 'Option'}>Celulares</NavLink>
        <NavLink to={`/category/tablet`} className={({ isActive}) => isActive? 'ActiveOption': 'Option'}>Tablet</NavLink>
        <NavLink to={`/category/notebook`} className={({ isActive}) => isActive? 'ActiveOption': 'Option'}>Notebook</NavLink>
        </div>
        <CartWidget/>
        </nav>
    
    )
}

export default NavBar

