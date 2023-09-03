import { configureStore } from "@reduxjs/toolkit";
import RPSGameSlice from "./features/RpsGameSlice";
import LeaderboardListSlice from "./features/LeaderboardListSlice";
import GamesByIdSlice from "./features/GamesByIdSlice";

export const store = configureStore({
  reducer: {
    rpsgame: RPSGameSlice,
    leaderboard: LeaderboardListSlice,
    allgames: GamesByIdSlice,
  },
});
