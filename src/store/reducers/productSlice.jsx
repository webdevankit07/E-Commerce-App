import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const PRODUCTS_API = import.meta.env.VITE_PRODUCT_API_KEY;

//! fetching all products from api...
export const getProducts = createAsyncThunk('getProducts', async (rejectWithValue) => {
    try {
        const { data } = await axios.get(`${PRODUCTS_API}?limit=0`);
        const featureProduct = data.products.slice(Math.random() * 100).slice(0, 3);
        return { data: data.products, featureProduct };
    } catch (error) {
        return rejectWithValue(error);
    }
});

//! fetching Single product from api...
export const getSingleProduct = createAsyncThunk('getSingleProduct', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${PRODUCTS_API}/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const products = createSlice({
    name: 'products',
    initialState: {
        isLoading: true,
        isError: false,
        products: [],
        featureProducts: [],
        singleProduct: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.products = payload.data;
                state.featureProducts = payload.featureProduct;
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = payload;
            })
            .addCase(getSingleProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.singleProduct = payload;
            })
            .addCase(getSingleProduct.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = payload;
            });
    },
});

export default products.reducer;
// export const {} = products.actions;
