import React, { Suspense, useCallback, useMemo } from "react";
import styled from "styled-components";

import styles from "./book_order.module.scss";

import { BaseButton } from "../../Common/styles";
import useSelfUntoggle from "../../../hooks/useSelfUntoggle";
import { useDispatchCart, useCart } from "../../../context/CartContext";
import { addBookType, removeBookType } from "../../../context/actionTypes";
const Confirmation = React.lazy(() => import("./Confirmation"));

const QButton = styled(BaseButton)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  margin: 2px;
  color: ${({ minus }) => (minus ? "GAINSBORO" : "DARKSLATEGRAY")};
  font-size: 14px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: ${({ minus }) => (minus ? "SLATEGRAY" : "GAINSBORO")};
`;

function BookOrder({ id }) {
  const cart = useCart();
  const dispatchCart = useDispatchCart();

  const addBook = useCallback(
    id => dispatchCart({ type: addBookType, payload: { id } }),
    [dispatchCart],
  );

  const removeBook = useCallback(
    id => dispatchCart({ type: removeBookType, payload: { id } }),
    [dispatchCart],
  );

  const handleAddBook = () => {
    addBook(id);
    handleConfirmation();
  };

  const [confirmation, handleConfirmation] = useSelfUntoggle(1200);

  const isInCart = useMemo(() => cart.findIndex(el => el.id === id) > -1, [
    cart,
    id,
  ]);

  return (
    <div className={styles.orderContainer}>
      {isInCart && (
        <QButton minus onClick={() => removeBook(id)}>
          -
        </QButton>
      )}
      <QButton onClick={handleAddBook}>+</QButton>
      <div
        style={{
          position: "relative",
          marginLeft: "12px",
          height: "42px",
          width: "100%",
        }}
      >
        <Suspense fallback={""}>
          {confirmation && (
            <Confirmation confirmation={confirmation}>
              Le livre a bien été ajouté panier !
            </Confirmation>
          )}
        </Suspense>
      </div>
    </div>
  );
}

export default BookOrder;
