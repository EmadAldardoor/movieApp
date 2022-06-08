import { configureStore, combineReducers } from "@reduxjs/toolkit";
import LoadingReducer from "./loading-reducer";

const reducer = combineReducers({
    LoadingReducer,
});

const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
