import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCar from '../ShoppingCar/ShoppingCar'

import './navBar.css'

const NavBar = () => {
  return (
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
 
        <Link to='/' className='seccion'>NBA STORE</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <NavLink to='/categoria/musculosas' className='seccion'>Musculosas</NavLink>
            <NavLink to='/categoria/remeras' className='seccion'>Remeras</NavLink>
            <NavLink to='/categoria/gorras' className='seccion'>Gorras</NavLink>
            <NavLink to='/categoria/buzos' className='seccion'>Buzos</NavLink>
            <NavLink to='/ShoppingCart'className='seccion'><ShoppingCar /></NavLink>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar