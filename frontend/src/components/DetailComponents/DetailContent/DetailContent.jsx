import React, { useEffect } from "react";
import { useState } from "react";
import ModalImage from "react-modal-image";
import { Link, useParams } from "react-router-dom";
import { MdDone } from "react-icons/md";
import axios from "axios";
import "./detailContent.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/CartSlice";
import DetailDesc from "../DetailDesc/DetailDesc";
const DetailContent = () => {
  const dispatch = useDispatch();
  const [tour, setTour] = useState({});
  const [added, setAdded] = useState(false);
  let URL = "http://localhost:7777/tour";
  const { id } = useParams();
  const getData = async () => {
    const resp = await axios.get(`${URL}/${id}`);
    setTour(resp.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const addToBasket = (data) => {
    dispatch(addToCart(data));
    setAdded(true);
  };
  return (
    <div className="container">
      <div className="detail-content">
        <div id={added ? "added-to-cart" : ""} className="cart-message">
          <div className="text">
            <MdDone />
            <span>"{tour.name}" has been added to your cart.</span>
          </div>
          <div className="btn">
            <Link to="/basket">View cart</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="tour-img">
              {tour.percentage && <span className="sale">Sale!</span>}
              {/* <ModalImage small={tour.image} large={tour.image} /> */}
              <img src={tour.image} alt="tour" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="tour-content">
              <h1>{tour.name}</h1>
              {tour.percentage ? (
                <div className="tour-price">
                  <h3>
                    <del>${tour.price}.00</del>
                  </h3>
                  <h3>
                    ${tour.price - (tour.price * tour.percentage) / 100}.00
                  </h3>
                </div>
              ) : (
                <span className="price">${tour.price}.00</span>
              )}
              {tour.title && <p id="tour-title">{tour.title}</p>}
              <p id="text">
                Vivamus eros massa, consequat non risus non, luctus varius erat.
                Sed tempor lorem eget bibendum elementum. Sed ornare lectus
                vitae nisl eleifend, quis pellentesque odio aliquam.
              </p>
              <div className="input">
                <input type="number" defaultValue={1} />
                <button onClick={() => addToBasket(tour)}>Add to cart</button>
              </div>
              <div className="category">
                <p>
                  Category: <span>{tour.category}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailDesc tour={tour} />
    </div>
  );
};

export default DetailContent;
