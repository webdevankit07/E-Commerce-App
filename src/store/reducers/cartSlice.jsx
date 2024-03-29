import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total_item: '',
        total_amount: '',
        shipping_fee: 50000,
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const { id, amount, product } = payload;

            //! tackle existing product..
            const existingProduct = state.cart?.find((item) => item.id === id);

            if (existingProduct) {
                let updatedProduct = state.cart.map((item) => {
                    if (item.id === id) {
                        let newAmount = item.amount + amount;
                        newAmount = newAmount >= item.max ? item.max : newAmount;
                        return { ...item, amount: newAmount };
                    } else {
                        return item;
                    }
                });
                state.cart = updatedProduct;
            } else {
                const cartProduct = {
                    id: id,
                    name: product.title,
                    amount,
                    image: product.thumbnail,
                    price: product.price,
                    max: product.stock,
                };
                state.cart = [...state.cart, cartProduct];
            }

            //! update Loacl Storage & cart...
            localStorage.setItem('ankitCart', JSON.stringify(state.cart));
        },
        updateQuantity: (state, { payload }) => {
            const updateCartProduct = state.cart.map((item) => {
                if (item.id === payload.id) {
                    return { ...item, amount: payload.Amount };
                } else {
                    return item;
                }
            });

            //! update Loacl Storage & cart...
            state.cart = updateCartProduct;
            localStorage.setItem('ankitCart', JSON.stringify(state.cart));
        },
        updateTotal: (state) => {
            const totalQuantity = state.cart?.reduce((total, item) => total + item.amount, 0);
            const totalAmount = state.cart?.reduce((total, item) => total + item.price * item.amount, 0);
            state.total_item = totalQuantity;
            state.total_amount = totalAmount;
        },
        removeItem: (state, { payload }) => {
            state.cart = state.cart.filter((item) => item.id !== payload);

            //! Add to Loacl Storage...
            localStorage.setItem('ankitCart', JSON.stringify(state.cart));
        },
        addFromLocalStorage: (state) => {
            const cartData = localStorage.getItem('ankitCart');
            state.cart = JSON.parse(cartData);
        },
        clearCart: (state) => {
            state.cart = [];
            localStorage.setItem('ankitCart', JSON.stringify(state.cart));
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, removeItem, addFromLocalStorage, clearCart, updateQuantity, updateTotal } = cartSlice.actions;
