import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;   
export type IAppDispatch = typeof store.dispatch;
export type IAppStore = typeof store;    

export default store;