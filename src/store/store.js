import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/Users";



const rootReducer = combineReducers({
  userReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});