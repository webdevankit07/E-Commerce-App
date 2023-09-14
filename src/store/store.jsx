import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';

const store = configureStore({
    reducer: {
        productsDetails: productSlice,
    },
});

export default store;
