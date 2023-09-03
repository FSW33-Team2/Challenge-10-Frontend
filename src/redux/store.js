import { configureStore } from "@reduxjs/toolkit";
import RPSGameSlice from "./features/RpsGameSlice";
import LeaderboardListSlice from "./features/LeaderboardListSlice";

export const store = configureStore({
  reducer: {
    rpsgame: RPSGameSlice,
    leaderboard: LeaderboardListSlice,
  },
});
