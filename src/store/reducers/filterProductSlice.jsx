import { createSlice } from '@reduxjs/toolkit';

const filterProductSlice = createSlice({
    name: 'filter',
    initialState: {
        allProducts: [],
        filterProducts: [],
        grid_view: true,
        sorting_value: '',
        filters: { text: '', category: 'All', brand: 'All', color: 'All', price: 0, maxPrice: 0 },
    },
    reducers: {
        setFilterProducts: (state, { payload }) => {
            state.filterProducts = payload;
            state.allProducts = payload;

            //! Find Highest Price from ALl_Products...
            const priceArr = payload.map((product) => product.price);
            const maxPrice = Math.max(...priceArr);
            state.filters.price = maxPrice;
            state.filters.maxPrice = maxPrice;
        },
        setGridView: (state, { payload }) => {
            state.grid_view = payload;
        },
        sorting: (state, { payload }) => {
            state.sorting_value = payload;

            //! Sorting Products...
            state.filterProducts.sort((a, b) =>
                payload === 'lowest'
                    ? a.price - b.price
                    : payload === 'highest'
                    ? b.price - a.price
                    : payload === 'a-z'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            );
        },
        updateFilterValue: (state, { payload }) => {
            state.filters = { ...state.filters, ...payload };

            //! filtering Products...
            const { text, category, brand, color, price, maxPrice } = state.filters;
            state.filterProducts = state.allProducts
                .filter((product) => (text === '' ? product : product.title.toLowerCase().includes(text)))
                .filter((product) => (category === 'All' ? product : product.category === category))
                .filter((product) => (brand === 'All' ? product : product.brand === brand))
                .filter((product) => (color === 'All' ? product : product.colors.includes(color)))
                .filter((product) => (price === maxPrice ? product : product.price <= price));
        },
        clearFilters: (state) => {
            state.filters = {
                ...state.filters,
                text: '',
                category: 'All',
                company: 'All',
                color: 'All',
                price: state.filters.maxPrice,
            };
        },
    },
});

export default filterProductSlice.reducer;
export const { setFilterProducts, setGridView, sorting, updateFilterValue, clearFilters } = filterProductSlice.actions;
