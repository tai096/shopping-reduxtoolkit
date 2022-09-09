import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncProductDetail } from "../../features/products/productSlice";

export default function ProductsDetail() {
  const productDetails = useSelector((state) => state.productDetail);
  console.log(productDetails);
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncProductDetail(productId));
  }, [dispatch, productId]);

  return <div>ProductsDetail</div>;
}
