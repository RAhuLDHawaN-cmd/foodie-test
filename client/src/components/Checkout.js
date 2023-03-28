import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }

  const key="pk_test_51MA4GrJfpsvriZT6l26vzxTtGEOgEmOGOhC28L3GWL7txjURRDg7SWmQyQPN48YZ5eD6XuPAGtEASHt6oTz9EBNv00xBV6bcN2"
 

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}

      {currentUser ? (
        <StripeCheckout
          amount={subtotal}
          shippingAddress
          token={tokenHandler}
          stripeKey={key}
          currency="INR"
        >
          <button className="btn">Pay Now</button>
        </StripeCheckout>
      ) : (
        <button className="btn">Login to Pay</button>
      )}
    </div>
  );
}
