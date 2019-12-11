import React, { useState } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

import "./checkoutForm.css";
import { Form, SubmitButton } from "./styles";

function CheckoutForm() {
  return (
    <Form onSubmit={this.handleSubmit}>
      <label htmlFor="name">Nom</label>
      <input
        className="StripeElement"
        type="text"
        onChange={this.handleChange}
        name="name"
        value={this.state.name}
        placeholder="Jon Snow"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        className="StripeElement"
        type="email"
        onChange={this.handleChange}
        name="email"
        value={this.state.email}
        placeholder="jon@lagarde.com"
        required
      />
      <label htmlFor="address_line1">Adresse</label>
      <input
        className="StripeElement"
        type="txt"
        onChange={this.handleChange}
        name="address_line1"
        value={this.state.address_line1}
        placeholder="1 rue de Châteaunoir"
        required
      />
      <label htmlFor="address_zip">Code Postal</label>
      <input
        className="StripeElement"
        type="txt"
        onChange={this.handleChange}
        name="address_zip"
        value={this.state.address_zip}
        placeholder="75000"
        required
      />
      <label htmlFor="address_city">Ville</label>
      <input
        className="StripeElement"
        type="txt"
        onChange={this.handleChange}
        name="address_city"
        value={this.state.address_city}
        placeholder="Châteaunoir"
        required
      />
      <label>Carte</label>
      <CardElement hidePostalCode={true} />
      <SubmitButton disabled={this.props.prixTotal <= 0} type="submit">
        Payer
      </SubmitButton>
      {this.state.erreur && <p>{this.state.erreur}</p>}
    </Form>
  );
}

export default CheckoutForm;
