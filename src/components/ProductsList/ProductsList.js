import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const products = useSelector((state) => state.listProducts.products);
  const listProducts = products.map((product) => {
    return (
      <div className="movie-wrapper" key={product.id}>
        <Link to={`/product/${product.id}`}>
          <div className="movie-list">
            <div className="card">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta price">{product.price}$</div>
                <div className="meta">{product.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{listProducts}</>;
}
