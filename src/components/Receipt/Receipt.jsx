import React from "react";

function Receipt({ cart }) {
  return (
    <div>
      <h1>Détails de la commande:</h1>
      <div>
        {cart.map(({ id, quantity }) => (
          <div key={id}>
            <h2>{id}</h2>
            <p>{quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Receipt;
