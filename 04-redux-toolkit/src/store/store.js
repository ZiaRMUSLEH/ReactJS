import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count/count-slice";
import themeReducer from "./theme/theme-slice";
import languageReducer from "./language/language-slice";

export const store = configureStore({
    reducer: {
        count: countReducer,
        theme: themeReducer,
        language: languageReducer,
    },
});
