import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '',
        adminId: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
        message: '',
        isAuth: false
    },
    reducers: {
        clearState: (state) => {
            state.isFetching = false;
            state.isSuccess = false;
            state.isError = false;
            return state;
        },
        authLogin: (state) => {
            state.isAuth = true;
        }
    }
});

export const { clearState, authLogin } = authSlice.actions;
export default authSlice.reducer;