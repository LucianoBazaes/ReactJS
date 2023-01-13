import React from 'react'

import ItemCount from '../ItemCount/ItemCount';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './itemDetail.css'

const ItemDetail = ({data}) => {
  
  const onAdd = (valor) => {
    console.log(`Compraste ${valor} unidades`);
  }

 return (
    <div className='cardDetail'>
        {<Card border="light" style={{ width: '30rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title> <h1>{data.nombre}</h1> </Card.Title>
          <Card.Text>
            <h2>${data.precio}</h2>                    
            <h2>{data.description}</h2> 
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item> <ItemCount initial={1} stock={9} onAdd={onAdd} /></ListGroup.Item>
        </ListGroup>        
      </Card> }


    </div>
  )
}

export default ItemDetail