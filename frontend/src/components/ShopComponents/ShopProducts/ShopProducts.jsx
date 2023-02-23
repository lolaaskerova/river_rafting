import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "./shopProducts.scss";
import { addToCart } from "../../../redux/features/CartSlice";
import BASE_URL from "../../../API/tourUrl";

const ShopProducts = () => {
  const [data, setData] = useState([]);
  //get data
  const getData = async () => {
    const response = await axios.get(BASE_URL);
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  //add to cart
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="shop-products-field">
      <div className="container">
        <div className="shop-products">
          <div className="product-row row">
            {data &&
              data.map((tour) => {
                return (
                  <div
                    className="product-card col-12 col-sm-6 col-md-4"
                    key={tour._id}
                  >
                    <Link to={`/tour/${tour._id}`}>
                      <div className="product-image">
                        {tour.percentage && <span className="sale">Sale!</span>}
                        <img src={tour.image} alt="tour" />
                      </div>
                      <h2>{tour.name}</h2>
                      <div className="product-price-field">
                        {tour.percentage ? (
                          <div className="discount-prices">
                            <del>${tour.price}.00</del>
                            <div className="discount-new-price">
                              $
                              {tour.price -
                                (tour.price * tour.percentage) / 100}
                              .00
                            </div>
                          </div>
                        ) : (
                          <span>${tour.price}.00</span>
                        )}
                      </div>
                    </Link>
                    <button onClick={() => handleAddToCart(tour)}>
                      Add To Cart
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
