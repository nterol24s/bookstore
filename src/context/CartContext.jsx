import React, { createContext, useReducer, useContext } from "react";

import { addBookType, removeBookType } from "./actionTypes";
import { isInCart, isInCartWithStock, changeQuantity } from "./utils";
import books from "../books";

const CartContext = createContext();
const DispatchCartContext = createContext();

function cartReducer(state, { type, payload }) {
  switch (type) {
    case addBookType: {
      if (isInCart(state, payload.id)) {
        const newState = changeQuantity(state, payload.id, 1);
        return newState;
      }
      const [{ title, price }] = books.filter(book => book.id === payload.id);
      return [...state, { id: payload.id, quantity: 1, title, price }];
    }
    case removeBookType: {
      if (isInCartWithStock(state, payload.id)) {
        const newState = changeQuantity(state, payload.id, -1);
        return newState;
      }

      return state.filter(({ id }) => id !== payload.id);
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <DispatchCartContext.Provider value={dispatchCart}>
        {children}
      </DispatchCartContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const cart = useContext(CartContext);
  console.log("🛒", cart);
  if (!cart) throw new Error("No cart found");
  return cart;
}

export function useDispatchCart() {
  const dispatchCart = useContext(DispatchCartContext);
  return dispatchCart;
}

export default CartContext;
