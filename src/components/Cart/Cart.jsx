import React, { useState, useRef, Suspense } from "react";

import styles from "./cart.module.scss";
import { Moji } from "../Common/common";

const Joke = React.lazy(() => import("../Joke"));

function Cart({ price }) {
  const [joke, setJoke] = useState(false);
  const jokeTimer = useRef(null);

  const handleMouseEnter = () => {
    if (!jokeTimer.current) {
      jokeTimer.current = setTimeout(() => setJoke(true), 4000);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(jokeTimer.current);
    jokeTimer.current = null;
    if (joke) setJoke(false);
  };

  return (
    <div
      className={styles.badge}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!joke ? (
        <a href="#checkout">
          <Moji moji="📚" type="pile of book" />
          Votre panier {price > 0 ? ` : ${price} €` : "est vide"}
        </a>
      ) : (
        <Suspense fallback={<Moji moji="🥚" type="easter egg" />}>
          <Joke />
        </Suspense>
      )}
    </div>
  );
}

export default Cart;
