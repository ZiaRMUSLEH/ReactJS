import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: "dark",
    },
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === "dark" ? "light" : "dark";
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
