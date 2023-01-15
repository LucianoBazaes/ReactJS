import React, {useState} from 'react'

import ItemCount from '../ItemCount/ItemCount';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';


import './itemDetail.css'

const ItemDetail = ({data}) => {

  const [irAlCarrito, setIrAlCarrito] = useState(false);
  
  const onAdd = () => {
   setIrAlCarrito(true);
  }

 return (
    <div className='cardDetail'>
        {<Card border="light" style={{ width: '20rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title> <h1>{data.nombre}</h1> </Card.Title>
          <Card.Text>
            <h2>${data.precio}</h2>                    
            <h3>{data.description}</h3> 
            {
              irAlCarrito 
              ? <Link className='terminarCompra' to='/shopping-cart'>✔️Terminar Compra</Link>
              : <ItemCount initial={1} stock={9} onAdd={onAdd} />
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