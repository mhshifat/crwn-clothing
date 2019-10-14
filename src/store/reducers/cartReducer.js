import {
  ADD_ITEM_TO_THE_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_THE_CART,
  TOGGLE_CART_DROPDOWN
} from "../actions/types";

const initialState = {
  isCartDropDownShown: false,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return { ...state, isCartDropDownShown: !state.isCartDropDownShown };

    case ADD_ITEM_TO_THE_CART:
      const existingItemCartForToAdd = state.cartItems.find(
        cartItem => cartItem.id === action.payload.id
      );
      return {
        ...state,
        cartItems: existingItemCartForToAdd
          ? state.cartItems.map(cartItem =>
              cartItem.id === action.payload.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          : [...state.cartItems, { ...action.payload, quantity: 1 }]
      };

    case REMOVE_ITEM_FROM_THE_CART:
      const existingItemCartForToRemove = state.cartItems.find(
        cartItem => cartItem.id === action.payload.id
      );
      return {
        ...state,
        cartItems:
          existingItemCartForToRemove &&
          existingItemCartForToRemove.quantity === 1
            ? state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
              )
            : state.cartItems.map(cartItem =>
                cartItem.id === action.payload.id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              )
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
