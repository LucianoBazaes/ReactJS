import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import foto from '../img/cartt.png'

import './cartWidget.css'

const CartWidget = () => {
  const {productosTotal} = useCartContext();
  return (     
        <div className="cartWidget">
          <Link to="/Cart"> <img src={foto} alt="carrito" className="carro" /> </Link>
          <p className='spanCart'>{productosTotal()||""}</p>
        </div>   
  );
};

export default CartWidget;

{
  /* <span className='spanCart'>{productosTotal()}</span> */
}
