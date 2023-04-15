import { createSlice } from "@reduxjs/toolkit";
const inputSlice = createSlice({
    name: "search-input",
    initialState: "",
    reducers: {
        searchByName(state, action) {}
    }
});

export const {searchByName} = inputSlice.actions;
export default inputSlice.reducer;