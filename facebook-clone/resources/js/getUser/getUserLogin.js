import { createSlice } from '@reduxjs/toolkit';

export const getUserLoginCurrent = createSlice({
    name: 'detailUser',
    initialState: {
        value: {
            name : '',
            email : '',
        }
    },
    reducers: {
        detailUserCurrent: (state,action) => {
            return {
                ...state,
                value : action.payload,
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const {detailUserCurrent} = getUserLoginCurrent.actions;

export default getUserLoginCurrent.reducer;
