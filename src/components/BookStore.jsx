import React, { Suspense } from "react";

import common from "./Common/common.module.scss";
import Header from "./Header";
import Book from "./Book";
import { usePrice } from "../context/CartContext";
import Cart from "./Cart";
import books from "../books";

const Receipt = React.lazy(() => import("./Receipt"));

function BookStore() {
  const price = usePrice();

  return (
    <div className={common.layout}>
      <Header />
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
      <Cart />
      <Suspense fallback={<div>...loading receipt</div>}>
        {price > 0 && <Receipt price={price} />}
      </Suspense>
    </div>
  );
}

export default BookStore;
