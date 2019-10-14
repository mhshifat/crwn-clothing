import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import { auth } from "../../../firebase";
import { selectIsCartDropdownShown } from "../../../store/selectors/cartSelectors";
import { selectCurrentUser } from "../../../store/selectors/userSelectors";
import CartDropDown from "../../Cart/CartDropDown/CartDropDown";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import "./Header.scss";

const Header = ({ currentUser, isCartDropDownShown }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartDropDownShown && <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartDropDownShown: selectIsCartDropdownShown
});

export default connect(mapStateToProps)(Header);
