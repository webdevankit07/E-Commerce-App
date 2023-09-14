import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const PRODUCTS_API = 'https://api.pujakaitem.com/api/products';

//! fetching all products from api...
export const getProducts = createAsyncThunk('getProducts', async (rejectWithValue) => {
    try {
        const { data } = await axios.get(PRODUCTS_API);
        const featureData = data.filter((e) => e.featured === true);
        return { data, featureData };
    } catch (error) {
        return rejectWithValue(error);
    }
});

const products = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        isError: false,
        products: [],
        featureProducts: [],
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
                state.featureProducts = payload.featureData;
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = payload;
            });
    },
});

export default products.reducer;
// export const {} = products.actions;
