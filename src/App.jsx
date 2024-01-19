import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  
  return (
    <div className='App'>
    <NavBar/>
    <ItemListContainer greeting={Bienvenidos}/>
    <ItemCount initial={1} stock={15} onAdd={(quantify) => console.log('Cantidad agregada', quantify)}/>
    <itemDetailContainer />
    </div>
  
  )
}

export default App
