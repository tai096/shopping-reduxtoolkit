import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListProducts } from "../../features/products/productSlice";
// import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Shopping App</div>
      </Link>
    </div>
  );
};

export default Header;
