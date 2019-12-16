import React from "react";
import "typeface-germania-one";
import "typeface-zilla-slab";
import "typeface-lato";
import "sanitize.css";

import BookStore from "./components/BookStore";
import { CartProvider } from "./context/CartContext";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BookStore />
    </CartProvider>
  );
}

export default App;
