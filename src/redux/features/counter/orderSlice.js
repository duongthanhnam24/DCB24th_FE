import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
const initialState = {
    orderItems: [],
    shippingAddress: {},
    paymentMethod: "",
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
    user: "",
    isPaid: false,
    paidAt: "",
    isDelivered: false,
    deliveredAt: "",
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state, action) => {
            const { orderItem } = action.payload;
            const itemOder = state?.orderItems?.find((item) => item?.product === orderItem.product);

            if (itemOder) {
                itemOder.amount += orderItem?.amount;
            } else {
                state.orderItems.push(orderItem);
            }
        },
        increasing: (state, action) => {
            const { productId } = action.payload;
            const itemOder = state?.orderItems?.find((item) => item?.product === productId);
            itemOder.amount++;
        },
        decrease: (state, action) => {
            const { productId } = action.payload;
            const itemOder = state?.orderItems?.find((item) => item?.product === productId);
            itemOder.amount--;
            if (itemOder.amount <= 0) {
                itemOder.amount = 1;
            }
        },
        removeOrder: (state, action) => {
            const { productId } = action.payload;
            const itemOder = state?.orderItems?.filter((item) => item?.product !== productId);
            console.log(current(state));
            state.orderItems = itemOder;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addOrder, removeOrder, increasing, decrease } = orderSlice.actions;

export default orderSlice.reducer;
