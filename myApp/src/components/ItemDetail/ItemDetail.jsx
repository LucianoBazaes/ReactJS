import React, {useState} from 'react'

import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';


import './itemDetail.css'

const ItemDetail = ({data}) => {

  const [irAlCarrito, setIrAlCarrito] = useState(false);

  const {addProduct} = useCartContext();
  
  const onAdd = (cantidad) => {
   setIrAlCarrito(true);
   addProduct(data, cantidad);
  }

 return (
    <div className='cardDetail'>
        {<Card border="light" style={{ width: '20rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title className="contenidoCart"> <h3>{data.nombre}</h3> </Card.Title>
          <h5 className='contenidoCart'>{data.description}</h5>
            <h3 className="contenidoCart">${data.precio}</h3>                              
           {
              irAlCarrito ? <div> <Link className='terminarCompra' to='/Cart'><Button className='btnCart' variant="outline-success">Ir al Carrito</Button> </Link> <Link to='/'><Button variant='outline-secondary'>Continuar Compra</Button></Link> </div>  : <ItemCount initial={1} stock={9} onAdd={onAdd} /> 
            }
        </Card.Body>
        <ListGroup className="list-group-flush">   
        </ListGroup>        
      </Card> }


    </div>
  )
}

export default ItemDetail