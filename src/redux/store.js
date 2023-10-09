import { configureStore } from "@reduxjs/toolkit";
import authSlide from "./features/counter/counterSlice";
import orderSlice from "./features/counter/orderSlice";

export const store = configureStore({
    reducer: {
        auth: authSlide,
        order: orderSlice,
    },
});
