import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { toggleCartDropdownAction } from "../../../store/actions/cartActions";
import { selectCartItems } from "../../../store/selectors/cartSelectors";
import PrimaryBtn from "../../Btns/PrimaryBtn";
import CartItem from "../CartItem/CartItem";
import "./CartDropDown.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </div>
      <PrimaryBtn
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartDropdownAction());
        }}
      >
        GO TO CHECKOUT
      </PrimaryBtn>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
