import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncProducts = createAsyncThunk(
  "productSlice/fetchAsyncProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    return response.data;
  }
);

export const fetchAsyncProductDetail = createAsyncThunk(
  "productSlice/fetchAsyncProductDetail",
  async (productId) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );

    return response.data;
  }
);

const initialState = {
  products: [],
  productDetail: {},
};
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    listProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
  extraReducers: {
    [fetchAsyncProducts.pending]: () => {
      <div>Loading</div>;
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      return { ...state, products: payload };
    },
    [fetchAsyncProductDetail.fulfilled]: (state, { payload }) => {
      return { ...state, productDetail: payload };
    },
    [fetchAsyncProducts.rejected]: () => {
      <div>Error 1</div>;
    },
  },
});

export const { listProducts } = productSlice.actions;
export default productSlice.reducer;
