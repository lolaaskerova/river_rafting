import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../../redux/features/CartSlice";
import "./basketMain.scss";
const BasketMain = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //remove from cart
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  //increase cart quanity
  const handleIncrease = (id) => {
    dispatch(incrementQuantity(id));
  };
  //decrease cart quantity
  const handleDecrease = (id) => {
    dispatch(decrementQuantity(id));
  };
  return (
    <div className="container basket-main">
      {cart.cart.length === 0 ? (
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
              {cart.cart &&
                cart.cart.map((item) => (
                  <tr className="table-content" key={item._id}>
                    <td className="product-name">{item.name}</td>
                    {item.percentage ? (
                      <td>
                        ${item.price - (item.price * item.percentage) / 100}.00
                      </td>
                    ) : (
                      <td>${item.price}.00</td>
                    )}

                    <td className="quantity">
                      <button onClick={() => handleDecrease(item._id)}>
                        {" "}
                        -{" "}
                      </button>
                      <div className="count">{item.quantity}</div>
                      <button onClick={() => handleIncrease(item._id)}>
                        {" "}
                        +{" "}
                      </button>
                    </td>
                    {item.percentage ? (
                      <td className="total">
                        $
                        {(item.price - (item.price * item.percentage) / 100) *
                          item.quantity}
                        .00
                      </td>
                    ) : (
                      <td className="total">
                        ${item.price * item.quantity}.00
                      </td>
                    )}

                    <td>
                      <i
                        onClick={() => handleRemove(item._id)}
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
                <p>${cart.cart.price * cart.cart.quantity}.00</p>
              </div>
              <div className="check-out-total">
                <h6>Total</h6>
                <p>${cart.cart.price * cart.cart.quantity}.00</p>
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
