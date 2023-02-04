import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import './navBar.css'

const NavBar = () => {
  return (
     <Navbar className='navBar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/' className='seccion'><img src="/public/celticsss.png" alt="logo" className='imgLogo' /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/categoria/musculosas' className='seccion'>Musculosas</NavLink>
            <NavLink to='/categoria/camisetas' className='seccion'>Camisetas</NavLink>
            <NavLink to='/categoria/gorras' className='seccion'>Gorras</NavLink>
            <NavLink to='/categoria/buzos' className='seccion'>Buzos</NavLink>
            <NavLink to='/shoppingCart'className='seccion bi bi-cart'></NavLink>     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar