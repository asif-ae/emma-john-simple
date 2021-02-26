import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce((total, mainProduct) => total + mainProduct.price, 0);

  let shippingCost = 0;
  if (totalPrice > 35) {
    shippingCost = 0;
  } else if (totalPrice > 15) {
    shippingCost = 4.99;
  } else if (totalPrice > 0) {
    shippingCost = 12.99;
  }

  let tax = (totalPrice / 10).toFixed(2);
  let grandTotal = (totalPrice + shippingCost + Number(tax)).toFixed(2);
  return (
    <div>
      <h3>Order Summury</h3>
      <p>Items Ordered: {cart.length}</p>
      <p>Price: {totalPrice}</p>
      <p><small>Shipping Cost: {shippingCost}</small></p>
      <p><small>Govt. Tax: {tax}</small></p>
      <p><b>Total Price: {grandTotal}</b></p>
    </div>
  );
};

export default Cart;