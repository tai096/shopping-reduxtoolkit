import React from "react";
import { useSelector } from "react-redux";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsList.scss";

export default function ProductsList() {
  const products = useSelector((state) => state.listProducts.products);
  const listProducts = products.map((product) => {
    return <ProductsCard key={product.id} data={product} />;
  });
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">{listProducts}</div>
      </div>
    </div>
  );
}
