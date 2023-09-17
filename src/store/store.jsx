import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import filterProductSlice from './reducers/filterProductSlice';

const store = configureStore({
    reducer: {
        productsDetails: productSlice,
        filterProducts: filterProductSlice,
    },
});

export default store;
