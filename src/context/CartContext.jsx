import React, { createContext, useState, useEffect } from "react";

import books from "../books";

const CartContext = createContext({ books });

export function CartProvider({ children }) {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // REACH SOME API
  }, []);

  // update price
  useEffect(() => {}, []);

  const isInCart = searchId => cart.findIndex(({ id }) => id === searchId) >= 0;

  const isInCartWithStock = searchId =>
    cart.findIndex(({ id, quantity }) => searchId === id && quantity > 1) >= 0;

  const changeQuantity = (searchId, value) =>
    cart.map(e =>
      e.id === searchId ? { ...e, quantity: e.quantity + value } : e,
    );

  const addBook = idToAdd => {
    if (isInCart(idToAdd)) setCart(changeQuantity(idToAdd, 1));
    else setCart([...cart, { id: idToAdd, quantity: 1 }]);
  };

  const removeBook = idToRemove => {
    if (isInCartWithStock(idToRemove)) setCart(changeQuantity(idToRemove, -1));
    else setCart(cart.filter(({ id }) => id !== idToRemove));
  };

  return (
    <CartContext.Provider
      value={{ price, setPrice, books, cart, removeBook, addBook }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
