import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useCartContext } from '../../context/CartContext';
import CartWidget from '../CartWidget/CartWidget';


import './navBar.css'

const NavBar = () => {
  const { productosTotal } = useCartContext();
  return (
     <Navbar className='navBar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/' className='seccion'><img src="/public/celticsss.png" alt="logo" className='imgLogo' /></Link>
        <CartWidget />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/categoria/musculosas' className='seccion'>Musculosas</NavLink>
            <NavLink to='/categoria/camisetas' className='seccion'>Camisetas</NavLink>
            <NavLink to='/categoria/gorras' className='seccion'>Gorras</NavLink>
            <NavLink to='/categoria/buzos' className='seccion'>Buzos</NavLink>     
          </Nav>
        </Navbar.Collapse>
        <div> 
          
          </div>  
      </Container>
    </Navbar>
  )
}

export default NavBar

{/* <Link to='/Cart' className='seccion'>
<img src="/public/shopping-cart.png" alt="logo" className='imgCarrito' />
</Link> */}