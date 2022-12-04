import ShoppingCar from '../ShoppingCar/ShoppingCar'
import './navBar.css'

const NavBar = () => {
  return (
    <nav>
      <h1>NBA Store</h1>
        <ul>      
            <li>
               <a href="#">Musculosas</a>
            </li>

            <li>
               <a href="#">Buzos</a>
            </li>
           
            <li>
            <a href="#">Accesorios</a>
            </li>

            <li>
            <a href="#">Calzado</a>
            </li>

            <li>
              <a href="#"> <ShoppingCar /></a>
            </li>

        </ul>

    </nav>
  )
}

export default NavBar