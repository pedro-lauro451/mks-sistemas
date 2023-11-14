// CartContext.tsx
import React, { createContext, useContext, useState } from 'react';

type CartContextType = {
  isCartVisible: boolean;
  toggleCartVisibility: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [isCartVisible, setCartVisibility] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisibility((prev) => !prev);
  };

  return (
    <CartContext.Provider value={{ isCartVisible, toggleCartVisibility }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};