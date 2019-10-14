import React from "react";
import { connect } from "react-redux";
import { addItemToTheCartAction } from "../../../store/actions/cartActions";
import PrimaryBtn from "../../Btns/PrimaryBtn";
import "./CollectionItem.scss";

const CollectionItem = ({ item, addItemToTheCartAction }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        style={{
          backgroundImage: `url("${imageUrl}")`
        }}
        className="image"
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <PrimaryBtn onClick={() => addItemToTheCartAction(item)} inverted>
        Add to cart
      </PrimaryBtn>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToTheCartAction: cartItem => dispatch(addItemToTheCartAction(cartItem))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
