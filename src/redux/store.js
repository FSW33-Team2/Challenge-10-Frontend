import { configureStore } from "@reduxjs/toolkit";
import RPSGameSlice from "./features/RpsGameSlice";
import AuthReducer from "./features/AuthReducer";


export const store = configureStore({
  reducer: {
    rpsgame: RPSGameSlice,
    authreducer: AuthReducer,
    

   
  },
});
