import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncProducts } from "../../features/products/productSlice";
import ProductsList from "../ProductsList/ProductsList";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <ProductsList />
    </div>
  );
}
