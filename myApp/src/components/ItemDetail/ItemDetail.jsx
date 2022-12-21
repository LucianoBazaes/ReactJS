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
    <div>
        {<Card className='cardDetail' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.nombre}</Card.Title>
          <Card.Text>
            {data.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item> <ItemCount initial={1} stock={10} onAdd={onAdd} /></ListGroup.Item>
        </ListGroup>        
      </Card> }


    </div>
  )
}

export default ItemDetail