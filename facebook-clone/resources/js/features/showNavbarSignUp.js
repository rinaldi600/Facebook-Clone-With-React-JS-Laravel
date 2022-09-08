import { createSlice } from '@reduxjs/toolkit'

export const showNavbarSlice = createSlice({
    name: 'showNavbar',
    initialState: {
        value: false,
    },
    reducers: {
        showNavbarSignUp: (state) => {
            state.value = true;
        },
        closeNavbarSignUp: (state) => {
            state.value = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { showNavbarSignUp, closeNavbarSignUp} = showNavbarSlice.actions;

export default showNavbarSlice.reducer;
