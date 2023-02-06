
import { Link } from 'react-router-dom';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import './item.css'

const Item = ( {contenido} ) => {
  return (
    <div className='cardGral'>
      
     <Card className='cardItem' border="success" style={{ width: '18rem' }}>
    <Card.Img variant="top" className='imgCard' src={contenido.image} />
     <Card.Body className='cardBody'>
      <Card.Title>{contenido.nombre}</Card.Title>
        <Card.Text className='cardText'>
         ${contenido.precio}
       </Card.Text>
       <Link to = {`/detalle/${contenido.id}`}>
       <Button variant="outline-success">Ver en detalle</Button>
       </Link>
     </Card.Body>
   </Card>
   </div>
 )
}

export default Item