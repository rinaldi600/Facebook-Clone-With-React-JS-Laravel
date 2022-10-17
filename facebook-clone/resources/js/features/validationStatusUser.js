import { createSlice } from '@reduxjs/toolkit'

export const validationSlice = createSlice({
    name: 'validationUser',
    initialState: {
        status: false,
        messageUser : '',
    },
    reducers: {
        setValidation: (state, action) => {
            return {
                ...state,
                status : action.payload.status,
                messageUser : action.payload.message,
            }
        }
    }
});

// Action creators are generated for each case reducer function
export const { setValidation } = validationSlice.actions;

export default validationSlice.reducer;
