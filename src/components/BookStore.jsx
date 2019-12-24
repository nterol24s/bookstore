import React, { useLayoutEffect, useRef, useContext, Suspense } from "react";

import { Layout } from "./basicStyle";
import Header from "./Header";
import Book from "./Book";
import CartContext from "../context/CartContext";
import Cart from "./Cart";

const Receipt = React.lazy(() => import("./Receipt"));

function BookStore() {
  const { books, cart, price } = useContext(CartContext);

  const bookRef = useRef(null);

  const handleScroll = () => {};

  useLayoutEffect(() => {
    let currentRef;
    if (bookRef.current) {
      currentRef = bookRef.current;
      currentRef.addEventListener("scroll", handleScroll);
    }
    return () => currentRef.removeEventListener("scroll", handleScroll);
  }, [bookRef]);

  return (
    <Layout>
      <Header />
      <div ref={bookRef}>
        {books.map(book => (
          <Book key={book.id} book={book} cart={cart} />
        ))}
      </div>
      <Cart />
      <Suspense fallback={<div>...loading receipt</div>}>
        {price > 0 && <Receipt cart={cart} price={price} />}
      </Suspense>
    </Layout>
  );
}

export default BookStore;
