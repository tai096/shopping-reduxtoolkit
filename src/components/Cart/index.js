import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCartItem,
  removeCartItem,
} from "../../features/cartSlice";
import "./Cart.scss";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (cartItem) => {
    dispatch(removeCartItem(cartItem));
  };
  const handleIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleDecrease = (cartItem) => {
    dispatch(decreaseCartItem(cartItem));
  };
  const handleClearCart = (cartItem) => {
    dispatch(clearCart(cartItem));
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
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
        <div className="shopping-cart">
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>
          {cart.cartItems?.map((cartItem) => (
            <div key={cartItem.id}>
              <div className="product">
                <div className="product-image">
                  <Link to={`/product/${cartItem.id}`}>
                    <img src={cartItem.image} alt={cartItem.title} />
                  </Link>
                </div>
                <div className="product-details">
                  <div className="product-title">{cartItem.title}</div>
                </div>
                <div className="product-price">{cartItem.price}</div>
                <div className="product-quantity">
                  <button onClick={() => handleDecrease(cartItem)}>-</button>
                  <span>{cartItem.productQuantity}</span>
                  <button onClick={() => handleIncrease(cartItem)}>+</button>
                </div>
                <div className="product-removal">
                  <button
                    onClick={() => handleRemove(cartItem)}
                    className="remove-product"
                  >
                    Remove
                  </button>
                </div>
                <div className="product-line-price">
                  {Number(cartItem.productQuantity * cartItem.price).toFixed(3)}
                </div>
              </div>
              <button onClick={() => handleClearCart(cartItem)}>Clear</button>
            </div>
          ))}
          <div className="totals">
            <div className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">
                71.97
              </div>
            </div>
            <div className="totals-item">
              <label>Tax (5%)</label>
              <div className="totals-value" id="cart-tax">
                3.60
              </div>
            </div>
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping">
                15.00
              </div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">
                90.57
              </div>
            </div>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      )}
    </div>
  );
}
