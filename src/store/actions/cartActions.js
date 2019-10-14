import {
  ADD_ITEM_TO_THE_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_THE_CART,
  TOGGLE_CART_DROPDOWN
} from "./types";

export const toggleCartDropdownAction = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const addItemToTheCartAction = cartItem => ({
  type: ADD_ITEM_TO_THE_CART,
  payload: cartItem
});

export const removeItemToTheCartAction = cartItem => ({
  type: REMOVE_ITEM_FROM_THE_CART,
  payload: cartItem
});

export const clearItemFromTheCartAction = cartItem => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: cartItem
});
