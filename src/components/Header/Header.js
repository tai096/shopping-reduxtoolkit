import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  let totalproductQuantity = 0;
  cart.cartItems?.map(
    (cartItem) => (totalproductQuantity += cartItem.productQuantity)
  );

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Shopping App</div>
      </Link>
      <Link to="/create">
        <div className="logo">create</div>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className="bag-quantity">{totalproductQuantity}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
