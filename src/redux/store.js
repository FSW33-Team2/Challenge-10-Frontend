import { configureStore } from "@reduxjs/toolkit";
import RPSGameSlice from "./features/RpsGameSlice";

export const store = configureStore({
  reducer: {
    rpsgame: RPSGameSlice,
  },
});
