import React, {useState} from 'react'

import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

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
          <Card.Title> <h2>{data.nombre}</h2> </Card.Title>
          <Card.Text>
            <p>${data.precio}</p>                    
            <p>{data.description}</p> 
            {
              irAlCarrito ? <Link className='terminarCompra' to='/ShoppingCart'>✔️Terminar Compra</Link> : <ItemCount initial={1} stock={9} onAdd={onAdd} />
            }
             
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">   
        </ListGroup>        
      </Card> }


    </div>
  )
}

export default ItemDetail