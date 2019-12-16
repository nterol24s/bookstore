import React, { Suspense, useContext } from "react";

import { Layout } from "./basicStyle";
import Header from "./Header";
import Cart from "./Cart";
import Book from "./Book";

import CartContext from "../context/CartContext";

const Receipt = React.lazy(() => import("./Receipt"));

function BookStore() {
  const { books, cart } = useContext(CartContext);

  return (
    <Layout>
      <Header />
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
      <Cart />
      <Suspense fallback={<div>...Loading receipt</div>}>
        {cart.length && <Receipt cart={cart} />}
      </Suspense>
    </Layout>
  );
}

export default BookStore;
