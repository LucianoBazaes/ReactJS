
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import Swal from 'sweetalert2';
import { Button } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./cart.css";


const Cart = () => {
  const { cart, precioTotal, vaciarCarrito } = useCartContext();

  const orden = {

    buyer: {
      name: "nombre",
      email: "email",
      phone: "telefono" 
    },
    items: cart.map(prod =>({ id: prod.id, nombre: prod.nombre, precio: prod.precio, cantidad: prod.cantidad })),
    total:precioTotal(),
  }

  const realizarCompra = () => {
    const dataBase = getFirestore();
    const ordenCollection = collection(dataBase,'ordenes');
    addDoc(ordenCollection, orden)
      .then(respuesta=>
        Swal.fire({
        icon: 'success',
        title: 'Perfecto, su compra ha sido realizada con éxito',
        text: 'El ID de su compra es:',
        footer: respuesta.id,
        showConfirmButton: false,
      })
      
      )
    }
    

  
  if (cart.length === 0) {
    return (
      <div>
        <h1>
          <Link className="cartVacio" to="/">
            Realizar Compra
          </Link>
        </h1>
      </div>
    );
  }

  return (
    <div>
      {cart.map((producto) => (
        <ItemCart key={producto.id} producto={producto} />
      ))}
      <div className="btnVaciar">
        <Button
          className="buttonCart"
          variant="warning"
          onClick={() => vaciarCarrito()}
        >
          Vaciar Carrito 🗑️
        </Button>
      </div>
      <h1 className="total">
        El precio total de su compra es: ${precioTotal()}
      </h1>

      <div className="btnVaciar">
        <Button className="btnComprar" variant="success" onClick={realizarCompra} >
          Confirmar Compra
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
