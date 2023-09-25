import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import filterProductSlice from './reducers/filterProductSlice';
import cartSlice from './reducers/cartSlice';

const store = configureStore({
    reducer: {
        productsDetails: productSlice,
        filterProducts: filterProductSlice,
        cart: cartSlice,
    },
});

export default store;
