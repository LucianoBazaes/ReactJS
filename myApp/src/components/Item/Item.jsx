import React from 'react'
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import './item.css'

const Item = ( {contenido} ) => {
  return (
     <Card className='cardItem' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={contenido.image} />
     <Card.Body>
      <Card.Title>{contenido.nombre}</Card.Title>
        <Card.Text>
         {contenido.precio}
       </Card.Text>
       <Link to = {`/detalle/${contenido.id}`}>
       <Button variant="primary">Ver en detalle</Button>
       </Link>
     </Card.Body>
   </Card>
 )
}

export default Item