import React from "react";
import { Link} from 'react-router-dom'
import ReactStars from 'react-stars'

const CarouselCard = ({elem}) => {
  return (
    <>
      <Link
        key={elem._id}
        className="card m-2 text-decoration-none"
        style={{ width: "15rem" }}
        to={`/product/${elem._id}`}
      >
        <img
          src={elem.images[0].url}
          className="card-img-top"
          alt={elem.name}
          style={{ height: "15rem" }}
        />
        <div className="card-body d-flex justify-content-start align-items-start flex-column bg-success">
          <h5 className="card-title text-warning">
            {elem.name.charAt(0).toUpperCase() + elem.name.slice(1)}
          </h5>
          <h5 className="card-title price">Rs: {elem.price}</h5>
          <div className="d-flex justify-content-center align-items-center">
            <ReactStars
              count={5}
              value={elem.ratings}
              size={window.innerWidth < 600 ? 20 : 18}
              color2={"#ffd700"}
            />
            <span className="CarouselCardSpan">
              ({elem.numOfReviews} Reviews)
            </span>
          </div>
          <p className="text-start CarouselCardSpan">
            {elem.description.substring(0, 15)}...
          </p>
          <div className="btn btn-warning">
            <i className="cart fa fa-shopping-cart cart-btn"></i>
            <span className=" fw-bold">Add To Cart</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CarouselCard;
