import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'



import { useState } from 'react'
import reactLogo from './assets/react.svg'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import ShoppingCar from './components/ShoppingCar/ShoppingCar'
import Carrousel from './components/Carrousel/Carrousel'

import 'bootstrap/dist/css/bootstrap.min.css'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
      <NavBar />
{/* 
      <Carrousel /> */}

      <Routes>

        <Route path='/' element={ <ItemListContainer/> } />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/ShoppingCart' element={<ShoppingCar />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
       
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
