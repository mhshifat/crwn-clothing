import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectIsCartDropdownShown = createSelector(
  [selectCart],
  cart => cart.isCartDropDownShown
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    )
);
