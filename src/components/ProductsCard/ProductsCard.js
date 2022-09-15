import React from "react";
import { Link } from "react-router-dom";
import "./ProductsCard.scss";

export default function ProductsCard(props) {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/product/${data.id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.title}</h4>
              <p>{data.price} $</p>
            </div>
          </div>
        </div>
      </Link>
      <button>Add to cart</button>
    </div>
  );
}
