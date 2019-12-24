import React from "react";

import { TotalPrice } from "./styles";
import { Container } from "../Common/styles";

const Receipt = ({ cart, price }) => (
  <Container>
    <h1>Détails de la commande:</h1>
    <div>
      {cart.map(({ id, quantity, title }) => (
        <div key={`receipt-${id}`}>
          <h2>{title}</h2>
          <p>{quantity}</p>
        </div>
      ))}
    </div>
    <TotalPrice>
      <h2>Total :</h2>
      <span>{price} €</span>
    </TotalPrice>
  </Container>
);

export default Receipt;
