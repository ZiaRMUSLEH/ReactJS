import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    value: 0,
};

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

// Action creators are generated for each case reducer function
export const { decrement, increment, incrementByAmount, reset } =
    countSlice.actions;

// export the reducer as a default export
export default countSlice.reducer;
