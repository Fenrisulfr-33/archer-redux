import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { combineReducers } from '@reduxjs/toolkit';
import user from '../redux/users/userReducers';
import apiCallsInProgress from '../redux/apiStatus/apiStatusReducer';

export const reducer = combineReducers({
  user,
  apiCallsInProgress,
})

export function makeStore() {
  return configureStore({
    reducer,
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store