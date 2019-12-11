import React, { createContext, useState, useEffect } from "react";

import books from "../books";

const CartContext = createContext({ books });

export function CartProvider({ children }) {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // REACH SOME API
  }, []);

  const isInCart = searchId => cart.findIndex(({ id }) => id === searchId) >= 0;

  const removeBook = idToRemove => {
    if (isInCart(idToRemove)) {
      // DO SOMETHING
    }
    // setCart(cart.filter(id => id !== idToRemove));
  };

  const addBook = idToAdd => {
    if (isInCart(idToAdd))
      setCart(
        cart.map(e =>
          e.id === idToAdd ? { ...e, quantity: e.quantity + 1 } : e,
        ),
      );
    else setCart([...cart, { id: idToAdd, quantity: 1 }]);
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
