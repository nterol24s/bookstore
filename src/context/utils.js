export const isInCart = (cart, searchId) =>
  cart.findIndex(({ id }) => id === searchId) >= 0;

export const changeQuantity = (cart, searchId, value) =>
  cart.map(e =>
    e.id === searchId ? { ...e, quantity: e.quantity + value } : e,
  );

export const isInCartWithStock = (cart, searchId) =>
  cart.findIndex(({ id, quantity }) => searchId === id && quantity > 1) >= 0;
