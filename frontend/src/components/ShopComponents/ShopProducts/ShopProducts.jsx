import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../../assets/images/waterfall.jpg";
import "./shopProducts.scss";
const ShopProducts = () => {
  const discount = true;
  const sale = true;
  const id = 2;
  return (
    <div className="shop-products-field">
      <div className="container">
        <div className="shop-products">
          <div className="product-row row">
            <div className="product-card col-12 col-sm-6 col-md-4">
              <Link to={"/product/" + id}>
                {" "}
                {/* burdaki id yerinə product.id olacaq */}
                <div className="product-image">
                  {sale && <span className="sale">Sale!</span>}
                  <img src={product1} alt="product" />
                </div>
                <h2>Gift Card</h2>
                <div className="product-price-field">
                  {discount ? (
                    <div className="discount-prices">
                      <del>$10.00</del>
                      <div className="discount-new-price">$10.00</div>
                    </div>
                  ) : (
                    <span>$10.00</span>
                  )}
                </div>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="product-card col-12 col-sm-6 col-md-4">
              <Link to={"/product/" + id}>
                <div className="product-image">
                  {sale && <span className="sale">Sale!</span>}
                  <img src={product1} alt="product" />
                </div>
                <h2>Gift Card</h2>
                <div className="product-price-field">
                  {discount ? (
                    <div className="discount-prices">
                      <del>$10.00</del>
                      <div className="discount-new-price">$10.00</div>
                    </div>
                  ) : (
                    <span>$10.00</span>
                  )}
                </div>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="product-card col-12 col-sm-6 col-md-4">
              <Link to={"/product/" + id}>
                <div className="product-image">
                  {sale && <span className="sale">Sale!</span>}
                  <img src={product1} alt="product" />
                </div>
                <h2>Gift Card</h2>
                <div className="product-price-field">
                  {discount ? (
                    <div className="discount-prices">
                      <del>$10.00</del>
                      <div className="discount-new-price">$10.00</div>
                    </div>
                  ) : (
                    <span>$10.00</span>
                  )}
                </div>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="product-card col-12 col-sm-6 col-md-4">
              <Link to={"/product/" + id}>
                <div className="product-image">
                  {sale && <span className="sale">Sale!</span>}
                  <img src={product1} alt="product" />
                </div>
                <h2>Gift Card</h2>
                <div className="product-price-field">
                  {discount ? (
                    <div className="discount-prices">
                      <del>$10.00</del>
                      <div className="discount-new-price">$10.00</div>
                    </div>
                  ) : (
                    <span>$10.00</span>
                  )}
                </div>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="product-card col-12 col-sm-6 col-md-4">
              <Link to={"/product/" + id}>
                <div className="product-image">
                  {sale && <span className="sale">Sale!</span>}
                  <img src={product1} alt="product" />
                </div>
                <h2>Gift Card</h2>
                <div className="product-price-field">
                  {discount ? (
                    <div className="discount-prices">
                      <del>$10.00</del>
                      <div className="discount-new-price">$10.00</div>
                    </div>
                  ) : (
                    <span>$10.00</span>
                  )}
                </div>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="product-card col-12 col-sm-6 col-md-4">
              <Link to={"/product/" + id}>
                {" "}
                {/* burdaki id yerinə product.id olacaq */}
                <div className="product-image">
                  {sale && <span className="sale">Sale!</span>}
                  <img src={product1} alt="product" />
                </div>
                <h2>Gift Card</h2>
                <div className="product-price-field">
                  {discount ? (
                    <div className="discount-prices">
                      <del>$10.00</del>
                      <div className="discount-new-price">$10.00</div>
                    </div>
                  ) : (
                    <span>$10.00</span>
                  )}
                </div>
              </Link>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
