import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    accessToken: "",
};

export const counterSlice = createSlice({
    name: "auth ",
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload.res;
        },
        getToken: (state, action) => {
            state.accessToken = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getUser, getToken } = counterSlice.actions;

export default counterSlice.reducer;
