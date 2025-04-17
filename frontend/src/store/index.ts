import { configureStore } from "@reduxjs/toolkit";
import betReducer from "../features/bet/betSlice";

export const store = configureStore({
  reducer: {
    betReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
