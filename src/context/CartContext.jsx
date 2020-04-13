import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext,
} from "react";

import { addBookType, removeBookType } from "./actionTypes";
import { isInCart, isInCartWithStock, changeQuantity } from "./utils";
import books from "../books";

const CartContext = createContext();
const PriceContext = createContext();
const SetPriceContext = createContext();
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
  const [price, setPrice] = useState(0);
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  useEffect(() => {
    const nPrice = cart.reduce(
      (acc, curr) => (acc += Number(curr.price) * curr.quantity),
      0,
    );
    setPrice(nPrice);
  }, [cart]);

  return (
    <CartContext.Provider value={cart}>
      <DispatchCartContext.Provider value={dispatchCart}>
        <PriceContext.Provider value={price}>
          <SetPriceContext.Provider value={setPrice}>
            {children}
          </SetPriceContext.Provider>
        </PriceContext.Provider>
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

export function usePrice() {
  const price = useContext(PriceContext);
  console.log("💸", price);
  if (price === undefined) throw new Error("No Price found");
  return price;
}

export function useSetPrice() {
  const setPrice = useContext(SetPriceContext);
  return setPrice;
}

export default CartContext;
