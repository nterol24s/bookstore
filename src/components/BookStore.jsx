import React from "react";

import common from "./Common/common.module.scss";
import Header from "./Header";
import Book from "./Book";

import books from "../books";
import CustomerCart from "./CustomerCart";



function BookStore() {
  return (
    <div className={common.layout}>
      <Header />
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
      <CustomerCart />
    </div>
  );
}

export default BookStore;
