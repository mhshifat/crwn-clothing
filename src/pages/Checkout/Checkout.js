import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeBtn from "../../Payments/StripeBtn";
import {
  selectCartItems,
  selectCartItemsTotalPrice
} from "../../store/selectors/cartSelectors";
import "./Checkout.scss";
import CheckoutItem from "./CheckoutItem/CheckoutItem";

const Checkout = ({ cartItems, cartItemTotalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartItemTotalPrice}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeBtn price={cartItemTotalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemTotalPrice: selectCartItemsTotalPrice
});

export default connect(mapStateToProps)(Checkout);
