import React from "react";
import { connect } from "react-redux";
import {
  addItemToTheCartAction,
  clearItemFromTheCartAction,
  removeItemToTheCartAction
} from "../../../store/actions/cartActions";
import "./CheckoutItem.scss";

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addItemToTheCart,
  removeItemFromTheCart
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromTheCart(cartItem)}>
          &#8592;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToTheCart(cartItem)}>
          &#8594;
        </div>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: cartItem => dispatch(clearItemFromTheCartAction(cartItem)),
  addItemToTheCart: cartItem => dispatch(addItemToTheCartAction(cartItem)),
  removeItemFromTheCart: cartItem =>
    dispatch(removeItemToTheCartAction(cartItem))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
