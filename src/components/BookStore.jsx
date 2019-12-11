import React, { useContext } from "react";

import { Layout } from "./basicStyle";
import Header from "./Header";
import Cart from "./Cart";
import Book from "./Book";
import BooksContext from "../context/BooksContext";

function BookStore() {
  const { books } = useContext(BooksContext);

  return (
    <Layout>
      <Header />
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
      <Cart />
    </Layout>
  );
}

export default BookStore;
