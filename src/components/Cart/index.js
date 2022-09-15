import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart.cartItems);
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="Quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-item">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <button>Remove</button>
                  </div>
                  <div className="cart-product-price">{cartItem.price}$</div>
                  <div className="cart-product-quantity">
                    <button>-</button>
                    <div className="count">{cartItem.productQuantity}</div>
                    <button>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    {cartItem.price * cartItem.productQuantity}$
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
