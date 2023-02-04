import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from "react";
import reactLogo from "./assets/react.svg";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { CartProvider } from "./context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
    <BrowserRouter>    
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>          
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>  
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
