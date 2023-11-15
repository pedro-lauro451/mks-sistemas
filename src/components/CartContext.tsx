// CartContext.tsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isCartVisible, setCartVisibility] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [purchaseTotal, setPurchaseTotal] = useState(0);

  const toggleCartVisibility = () => {
    setCartVisibility((prev) => !prev);
  };

  const addToCart = (product: any) => {
    if (!cartItems.some((item: any) => item.id === product.id)) {
      setCartItems((prevItems: any) => [...prevItems, product]);
    }
  };

  const removeFromCart = (productId: any) => {
    setCartItems((prevItems: any) => prevItems.filter((item: any) => item.id !== productId));
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