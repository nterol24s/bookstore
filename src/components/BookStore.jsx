import React, { useContext, Suspense } from "react";

import { Layout } from "./basicStyle";
import Header from "./Header";
import Book from "./Book";
import CartContext from "../context/CartContext";
import Cart from "./Cart";

const Receipt = React.lazy(() => import("./Receipt"));

function BookStore() {
  const { books, cart, price } = useContext(CartContext);

  return (
    <Layout>
      <Header />
      {books.map(book => (
        <Book key={book.id} book={book} cart={cart} />
      ))}
      <Cart price={price} />
      <Suspense fallback={<div>...loading receipt</div>}>
        {price > 0 && <Receipt cart={cart} price={price} />}
      </Suspense>
    </Layout>
  );
}

export default BookStore;
