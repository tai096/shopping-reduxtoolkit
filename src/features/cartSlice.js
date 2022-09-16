const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].productQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, productQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    decreaseCartItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (state.cartItems[itemIndex].productQuantity > 1) {
        state.cartItems[itemIndex].productQuantity -= 1;
      } else if (state.cartItems[itemIndex].productQuantity === 1) {
        const newCart = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = newCart;
      }
    },
    removeCartItem(state, action) {
      const newCart = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = newCart;
    },
    clearCart(state, action) {
      state.cartItems = {};
    },
  },
});

export const { addToCart, removeCartItem, decreaseCartItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
