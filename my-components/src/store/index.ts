import { configureStore } from "@reduxjs/toolkit";
import inputReducer from './inputSlice';

export default configureStore({
    reducer: {
        searchInput: inputReducer
    }
});