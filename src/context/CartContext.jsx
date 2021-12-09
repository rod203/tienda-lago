import React from 'react'
import { useState ,createContext } from 'react'

export const CartContext = createContext();

function CartProvider({children}) {

  const [cart, setCart] = useState([]);
  
  const addItem = (item) => {
    setCart([...cart, item]);
  }
  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  const removeItem = (id) => {
    let newCart = cart.filter(item => item.id !== id);
    setCart(newCart); 
  }

  const ClearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{cart, addItem, isInCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
