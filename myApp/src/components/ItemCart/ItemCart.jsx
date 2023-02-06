import Card from "react-bootstrap/Card";
import { useCartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';
import "./itemCart.css";

const ItemCart = ({ producto }) => {
  const { eliminarProdCarrito } = useCartContext();

  return (
    <div className="cardItemCart">
      <Card  style={{ width: "15rem" }}>
        <Card.Img variant="top" className="imgItem" src={producto.image} />
        <Card.Body>
          <Card.Title className="contenidoCart">{producto.nombre}</Card.Title>
            <p className="contenidoCart"> Cantidad: {producto.cantidad} </p>
            <p className="contenidoCart"> Precio: ${producto.precio} </p>
          <h5 className="contenidoCart">Subtotal: ${producto.cantidad * producto.precio}</h5>
          <Button variant="danger" onClick={() => eliminarProdCarrito(producto.id)}>  Eliminar  </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCart;
