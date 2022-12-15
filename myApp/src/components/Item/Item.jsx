import React from 'react'
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import './item.css'

const Item = ( {contenido} ) => {
  return (
    <Link to = {`/detalle/${contenido.id}`}>
     <Card className='cardItem' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={contenido.image} />
     <Card.Body>
      <Card.Title>{contenido.nombre}</Card.Title>
        <Card.Text>
         {contenido.precio}
       </Card.Text>
       <Button variant="primary">Ver en detalle</Button>
     </Card.Body>
   </Card>
   </Link>
 )
}

export default Item