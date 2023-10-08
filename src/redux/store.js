import { configureStore } from "@reduxjs/toolkit";
import authSlide from "./features/counter/counterSlice";
export const store = configureStore({
    reducer: {
        auth: authSlide,
    },
});
