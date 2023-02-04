import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'

import './shoppingCart.css'


const ShoppingCar = () => {
  
  const{ cart, precioTotal } = useCartContext();


  

  return (
    <i>hola</i>
  )
}

export default ShoppingCar