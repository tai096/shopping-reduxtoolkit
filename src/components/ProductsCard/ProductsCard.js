import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import "./ProductsCard.scss";

export default function ProductsCard(props) {
  const { data } = props;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card-item">
      <Link to={`/product/${data.id}`}>
        <img src={data.image} alt={data.title} />
        <h4>{data.title}</h4>
        <p>{data.price} $</p>
      </Link>
      <button onClick={() => handleAddToCart(data)}>Add to cart</button>
    </div>
  );
}
