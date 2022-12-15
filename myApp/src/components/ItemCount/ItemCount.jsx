import './itemCount.css'

import React, {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

//Funcion para incrementar el contador
    const incrementarCount = () => {
        setCount(count + 1);
    }

//Funcion para decrementar el contador
    const decrementarCount = () => {
        setCount(count - 1);
    }    
   
  
  return (
    <div className='contador'>
        <button disabled={count >= stock} className='btn btn-primary' onClick={incrementarCount}>+</button>        
        <span>{count}</span>
        <button disabled={count <= 1} className='btn btn-primary' onClick={decrementarCount}>-</button>
        <div>
            <button disabled={stock <= 0} onClick ={()=> onAdd(count)} className='addToCart'>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount