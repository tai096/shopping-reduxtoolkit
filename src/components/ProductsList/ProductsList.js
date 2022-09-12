import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getListProducts } from "../../features/products/productSlice";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsList.scss";

export default function ProductsList() {
  const [searchProducts, setSearchProducts] = useState("");
  const products = useSelector(getListProducts);
  const listProducts = products
    .filter((product) => {
      if (searchProducts === "") {
        return product;
      } else if (
        product.title.toLowerCase().includes(searchProducts.toLowerCase())
      ) {
        return product;
      }
    })
    .map((product) => {
      return <ProductsCard key={product.id} data={product} />;
    });
  return (
    <div className="movie-wrapper">
      <input
        type="text"
        className="searchBar"
        placeholder="Search..."
        onChange={(e) => setSearchProducts(e.target.value)}
      />
      <div className="movie-list">
        <div className="movie-container">{listProducts}</div>
      </div>
    </div>
  );
}
