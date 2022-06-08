import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '',
        adminId: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
        message: ''
    },
    reducers: {
        clearState: (state) => {
            state.isFetching = false;
            state.isSuccess = false;
            state.isError = false;
            return state;
        }
    }
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;