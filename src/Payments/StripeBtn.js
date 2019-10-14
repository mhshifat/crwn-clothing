import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeBtn = ({ price }) => {
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING"
      billingAddress
      shippingAddress
      stripeKey="pk_test_T9eGC686Dfv5z3kHUgFDR2Yf"
      image="http://svgshare.com/i/CUz.svg"
      amount={price * 100}
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={token => console.log(token)}
    />
  );
};

export default StripeBtn;
