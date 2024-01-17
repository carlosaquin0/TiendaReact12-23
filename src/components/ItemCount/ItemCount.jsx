import { useState } from "react"

const ItemCount = ({stock, inital, onAdd})=> {
    const [quantify, setQuantify] = useState(initial)

    const increment = () =>{
        if(quantify <stock) {
            setQuantify(quantify+1)
        }
    } 

    const decrement = () => {
        if(quantify > 1) {
            setQuantify(quantify - 1)
        }
    }
    
    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>-</button>
                <h4 className='Number'>{quantify}</h4>
                <button className='Button' onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantify)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}