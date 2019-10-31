export const addItemToCart = (cartItems, cartItemToAdd) => {
  // check if item exists in cart
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // if it does then get id and update quantity
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return previous array with updated quantity
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
