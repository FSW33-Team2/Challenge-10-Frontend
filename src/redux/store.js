import { configureStore } from '@reduxjs/toolkit'
import RPSGameSlice from './features/RpsGameSlice'
import LeaderboardListSlice from './features/LeaderboardListSlice'
import GamesByIdSlice from './features/GamesByIdSlice'
import UserTokenSlice from './features/Auth/UserTokenSlice'
import AuthReducer from './features/Auth/AuthReducer'

export const store = configureStore({
  reducer: {
    rpsgame: RPSGameSlice,
    leaderboard: LeaderboardListSlice,
    allgames: GamesByIdSlice,
    usertoken: UserTokenSlice,
    authreducer: AuthReducer,
  },
})
