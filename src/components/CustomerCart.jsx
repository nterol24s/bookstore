import React, { Suspense, useMemo } from "react";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

const Receipt = React.lazy(() => import("./Receipt"));

function CustomerCart() {
  const cart = useCart();
  const price = useMemo(
    () =>
      !!cart.length
        ? cart.reduce(
            (acc, curr) => (acc += Number(curr.price) * curr.quantity),
            0,
          )
        : 0,
    [cart],
  );

  return (
    <>
      <Cart price={price} />
      <Suspense fallback={<div>Loading...</div>}>
        {price ? <Receipt price={price}  /> : null}
      </Suspense>
    </>
  );
}

export default CustomerCart;
