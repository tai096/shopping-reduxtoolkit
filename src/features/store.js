import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./products/productSlice";

export const store = configureStore({
  reducer: { listProducts: productsReducer, cart: cartReducer },
});
