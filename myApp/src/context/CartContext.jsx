import {createContext, useContext, useState} from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);
 
  
  //Funcion para vaciar el carrito
  const vaciarCarrito = () => setCart([]);
  

  //Funcion para eliminar un producto del carrito
  const eliminarProdCarrito = (id) => {
    setCart(cart.filter((prod) => prod.id !== id))
  }

  //Funcion para mostrar la cantidad de productos
  const productosTotal = () => {
   return cart.reduce((acc, productoActual) => acc + productoActual.cantidad,0);
  }

  //Funcion para validar si el producto ya fue agregado al carrtio
  const prodExiste = id => cart.map(prod => prod.id).includes(id);


  //Funcion para obtener el precio total
   const precioTotal = () => { 
   return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
   }
 
  //Funcion para agregar un producto al carrito
  const addProduct = (item, cantidad) => {
    if(prodExiste(item.id)) {
        setCart(cart.map(prod => {
            return (prod.id === item.id ? {...prod, cantidad: prod.cantidad + cantidad} : prod);
        }))
    } else {
        setCart(cart.concat({...item, cantidad}));
    }

  }


  return (
    <CartContext.Provider value={{
        vaciarCarrito,
        eliminarProdCarrito,
        prodExiste,
        precioTotal,
        addProduct,
        productosTotal,
        cart
    }}> 
         { children }
    </CartContext.Provider>
  )
}

export default CartContext