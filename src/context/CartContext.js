import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    case 'REMOVE_FROM_CART':
      return state.filter((p) => p.id !== action.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
