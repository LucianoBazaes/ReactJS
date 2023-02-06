import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import './cartWidget.css'

const CartWidget = () => {
  const {productosTotal} = useCartContext();
  return (     
        <div className="cartWidget">
          <Link to="/Cart"> <img src="/public/cartt.png" alt="carrito" className="carro" /> </Link>
          <p className='spanCart'>{productosTotal()||""}</p>
        </div>   
  );
};

export default CartWidget;

{
  /* <span className='spanCart'>{productosTotal()}</span> */
}
