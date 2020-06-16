import React from "react";

import styles from "./receipt.module.scss";
import common from "../Common/common.module.scss";
import c from "classnames";
import { useCart } from "../../context/CartContext";

const Receipt = ({ price }) => {
  const cart = useCart();
  return (
    <div className={common.container}>
      <h1>Détails de la commande:</h1>
      <div>
        {cart.map(({ id, quantity, title }) => (
          <div key={`receipt-${id}`}>
            <h2>{title}</h2>
            <p>{quantity}</p>
          </div>
        ))}
      </div>
      <div className={c(common.row, styles.totalPrice)}>
        <h2>Total :</h2>
        <span>{price} €</span>
      </div>
    </div>
  );
};

export default Receipt;
