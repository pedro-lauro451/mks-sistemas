// CartContext.tsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [isCartVisible, setCartVisibility] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [purchaseTotal, setPurchaseTotal] = useState(0);

  const toggleCartVisibility = () => {
    setCartVisibility((prev) => !prev);
  };

  const addToCart = (product) => {
    if (!cartItems.some((item) => item.id === product.id)) {
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{
      isCartVisible,
      toggleCartVisibility,
      cartItems,
      addToCart,
      removeFromCart,
      purchaseTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};