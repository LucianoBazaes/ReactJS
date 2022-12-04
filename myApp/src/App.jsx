import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ItemContainer from './components/ItemContainer/ItemContainer'
import NavBar from './components/NavBar/NavBar'
import ShoppingCar from './components/ShoppingCar/ShoppingCar'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let saludo = 'Hola mundo, saludos!'


  return (
    <div>
      <NavBar>

        <ShoppingCar  />

      </NavBar>

      <ItemContainer saludo ={saludo}/>
      
    </div>
  )
}

export default App
