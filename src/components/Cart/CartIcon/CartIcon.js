import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import { toggleCartDropdownAction } from "../../../store/actions/cartActions";
import { selectCartItemsCount } from "../../../store/selectors/cartSelectors";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartDropdownAction, cartItemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdownAction}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdownAction: () => dispatch(toggleCartDropdownAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
