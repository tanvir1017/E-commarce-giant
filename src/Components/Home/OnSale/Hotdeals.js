import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./OnSale.css";
const Hotdeals = ({ sale }) => {
  const { name, _id, price, img, rating } = sale;
  return (
    <div className=" col-lg-3 col-md-6 mt-4">
      <div className="product-top">
        <Link to={`/product/${_id}`}>
          <img src={img} className="mb-3 img-fluid " alt="" />
        </Link>
        <div className="icon">
          <div className="overlay-right">
            <button type="button" className="btn" title="Quick shop">
              <i className="fas fa-eye shadow"></i>
            </button>
            <button type="button" className="btn" title="Add to wishlist">
              <i className="fas fa-heart shadow"></i>
            </button>
            <button type="button" className="btn" title="Add to cart">
              <i className="fas fa-shopping-cart shadow"></i>
            </button>
          </div>

          <div className="product-review text-center">
            <Rating
              className="text-dark"
              initialRating={rating}
              emptySymbol=" fas fa-star-half-alt"
              fullSymbol="fas fa-star"
              readonly
            />

            <h4 className="small m-0 p-0">{name}</h4>
            <p className="small">Price: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotdeals;
