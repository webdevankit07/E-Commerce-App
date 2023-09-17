import { createSlice } from '@reduxjs/toolkit';

const filterProductSlice = createSlice({
    name: 'filter',
    initialState: {
        allProducts: [],
        filterProducts: [],
        textFilterData: [],
        categoryFilterData: [],
        companyFilterData: [],
        grid_view: true,
        sorting_value: '',
        filters: {},
    },
    reducers: {
        setFilterProducts: (state, { payload }) => {
            state.filterProducts = payload;
            state.allProducts = payload;
            state.textFilterData = payload;
            state.categoryFilterData = payload;
            state.companyFilterData = payload;
        },
        setGridView: (state, { payload }) => {
            state.grid_view = payload;
        },
        sorting: (state, { payload }) => {
            state.sorting_value = payload;

            //! Sorting Products...
            state.filterProducts.sort((a, b) => (payload === 'lowest' ? a.price - b.price : payload === 'highest' ? b.price - a.price : payload === 'a-z' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
        },
        updateFilterValue: (state, { payload }) => {
            state.filters = { ...state.filters, ...payload };

            //! filtering Products...
            const { text, category, company } = state.filters;

            if (text) {
                state.textFilterData = state.allProducts.filter((product) => product.name.toLowerCase().includes(text));
                state.filterProducts = state.textFilterData;
            } else {
                state.filterProducts = state.allProducts;
                // state.filters = {};
            }

            if (category) {
                state.categoryFilterData = category === 'All' ? state.textFilterData : state.textFilterData.filter((product) => product.category === category);
                state.filterProducts = state.categoryFilterData;
            }

            if (company) {
                state.companyFilterData = company === 'All' ? state.categoryFilterData : state.categoryFilterData.filter((product) => product.company === company);
                state.textFilterData = state.companyFilterData;
            }
        },
    },
});

export default filterProductSlice.reducer;
export const { setFilterProducts, setGridView, sorting, updateFilterValue } = filterProductSlice.actions;
