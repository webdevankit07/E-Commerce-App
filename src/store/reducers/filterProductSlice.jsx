import { createSlice } from '@reduxjs/toolkit';

const filterProductSlice = createSlice({
    name: 'filter',
    initialState: {
        filterProducts: [],
        grid_view: true,
        sorting_value: 'lowest',
    },
    reducers: {
        setFilterProducts: (state, { payload }) => {
            state.filterProducts = payload;
        },
        setGridView: (state, { payload }) => {
            state.grid_view = payload;
        },
        sorting: (state, { payload }) => {
            state.sorting_value = payload;

            //! Sorting Products...
            state.filterProducts.sort((a, b) => (payload === 'lowest' ? a.price - b.price : payload === 'highest' ? b.price - a.price : payload === 'a-z' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
        },
    },
});

export default filterProductSlice.reducer;
export const { setFilterProducts, setGridView, sorting } = filterProductSlice.actions;
