import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncProductDetail,
  getDetailProduct,
  removeDataProductDetail,
} from "../../features/products/productSlice";
import "./ProductsDetail.scss";

export default function ProductsDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetailProduct);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncProductDetail(productId));
    return () => {
      dispatch(removeDataProductDetail());
    };
  }, [dispatch, productId]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="container">
          <img className="img" src={data.image} alt={data.title} />
          <div className="container_information">
            <h1>{data.title}</h1>
            <h2>Price: {data.price} $</h2>
            <h3>Rate: {data.rating.rate}</h3>
            <h2>Category: {data.category}</h2>
            <p>Description: {data.description}</p>
            <button>Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
