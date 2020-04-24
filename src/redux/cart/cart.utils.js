export const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, item) => {
  const lastCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id && item.quantity === 1
  );

  if (!lastCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const clearItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};
