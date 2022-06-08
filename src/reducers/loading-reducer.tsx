import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requested: 0,
};

const slice = createSlice({
    name: "lodingReducer",
    initialState: initialState,
    reducers: {
        addRequest: (state = initialState) => {
            state.requested = ++state.requested;
        },
        removeRequest: (state = initialState) => {
            if (state.requested != 0) {
                state.requested = --state.requested;
            }
        },
    },
});

export default slice.reducer;

export const { addRequest, removeRequest } = slice.actions;
