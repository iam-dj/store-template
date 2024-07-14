import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId, quantity = 1) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === productId);
      if (existingProductIndex > -1) {
        const updatedCart = [...prevCart];
        if (updatedCart[existingProductIndex].quantity > quantity) {
          updatedCart[existingProductIndex].quantity -= quantity;
        } else {
          updatedCart.splice(existingProductIndex, 1);
        }
        return updatedCart;
      }
      return prevCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
