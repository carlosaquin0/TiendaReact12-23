import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import itemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { Route } from 'react-router-dom'

import { CartProvider } from './context/cartContext';

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
    <CartProvider>  
    <NavBar/>
    <ItemListContainer greeting={Bienvenidos}/>
    <ItemCount initial={1} stock={15} onAdd={(quantify) => console.log('Cantidad agregada', quantify)}/>
    <itemDetailContainer />
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      <Route path='item/itemId' element={<itemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='*' element={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </div>
  
  )
}

export default App
