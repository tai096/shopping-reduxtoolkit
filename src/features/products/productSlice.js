import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    listProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { listProducts } = productSlice.actions;
export default productSlice.reducer;
