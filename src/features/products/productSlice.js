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

export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (data) => {
    try {
      const response = await axios.post(
        `https://fakestoreapi.com/products`,
        data
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
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
    removeDataProductDetail: (state) => {
      state.productDetail = {};
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
      <div>Error 404</div>;
    },
    [productsCreate.fulfilled]: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { listProducts, removeDataProductDetail } = productSlice.actions;
export const getDetailProduct = (state) => state.listProducts.productDetail;
export const getListProducts = (state) => state.listProducts.products;
export default productSlice.reducer;
