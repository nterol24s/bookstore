import React, { createContext } from "react";

import books from "../books";

const BooksContext = createContext();

export function BookProvider({ children }) {
  return (
    <BooksContext.Provider
      value={{
        books,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
