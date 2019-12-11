import React from "react";
import "typeface-germania-one";
import "typeface-zilla-slab";
import "typeface-lato";
import "sanitize.css";

import BookStore from "./components/BookStore";
import { CartProvider } from "./context/CartContext";
import { BookProvider } from "./context/BooksContext";

import "./App.css";

function App() {
  return (
    <BookProvider>
      <CartProvider>
        <BookStore />
      </CartProvider>
    </BookProvider>
  );
}

export default App;
