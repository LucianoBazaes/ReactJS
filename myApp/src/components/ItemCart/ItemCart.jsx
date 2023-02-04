import React from 'react'

import Card from 'react-bootstrap/Card';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ producto }) => {

 const  { eliminarProdCarrito } = useCartContext();

  return (
    <Card>
        <Card.Img variant="top" src={producto.image} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            <p> {producto.cantidad} </p>
            <p>  {producto.precio} </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>Subtotal:{producto.cantidad * producto.precio}</p>
          <button onClick={()=>eliminarProdCarrito(producto.id)}>Eliminar</button>
        </Card.Footer>
      </Card>
  )
}

export default ItemCart