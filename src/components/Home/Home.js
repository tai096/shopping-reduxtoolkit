import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import productsApi from "../../common/apis/productsApi";
import { listProducts } from "../../features/products/productSlice";
import ProductsList from "../ProductsList/ProductsList";

export default function Home() {
  const dispatch = useDispatch();
  const getDataProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
    dispatch(listProducts(response.data));
  };
  useEffect(() => {
    getDataProducts();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <ProductsList />
    </div>
  );
}
