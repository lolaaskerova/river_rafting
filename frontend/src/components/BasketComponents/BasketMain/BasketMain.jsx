import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseCart,
  decreaseCart,
  removeFromCart,
} from "../../../redux/features/CartSlice";
import "./basketMain.scss";
const BasketMain = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //remove from cart
  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };
  //increase cart quanity
  const handleIncrease = (product) => {
    dispatch(increaseCart(product));
  };
  //decrease cart quantity
  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };
  return (
    <div className="container basket-main">
      {cart.cartItems.length === 0 ? (
        <div className="empty">
          <div className="empty-text">
            <p>Your cart is currently empty.</p>
          </div>
          <Link to="/shop">Return to shop</Link>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-items">
            <table>
              <tr className="table-head">
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
              {cart.cartItems &&
                cart.cartItems.map((item) => (
                  <tr className="table-content">
                    <td className="product-name">{item.name}</td>
                    <td>{item.price}</td>
                    <td className="quantity">
                      <button onClick={() => handleDecrease(item)}> - </button>
                      <div className="count">{item.cartQuantity}</div>
                      <button onClick={() => handleIncrease(item)}> + </button>
                    </td>
                    <td className="total">
                      ${item.price * item.cartQuantity}.00
                    </td>
                    <td>
                      <i
                        onClick={() => handleRemove(item)}
                        class="fa-solid fa-xmark"
                        title="Remove this product"
                      ></i>
                    </td>
                  </tr>
                ))}
            </table>
          </div>
          <div className="coupon-input">
            <input type="text" placeholder="Coupon code" />
            <button>Apply Coupon</button>
          </div>
          <div className="check-out">
            <div className="col-lg-4 col-md-12 col-sm-12 check-out-content">
              <h5>Cart totals</h5>
              <div className="subtotal">
                <h6>Subtotal</h6>
                <p>${cart.cartTotalAmount}.00</p>
              </div>
              <div className="check-out-total">
                <h6>Total</h6>
                <p>${cart.cartTotalAmount}.00</p>
              </div>
              <Link to="/check">Proceed to checkout</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketMain;
