import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { combineReducers } from '@reduxjs/toolkit';
import pokemon from '../redux/pokemon/pokemonReducer';
import national from '../redux/pokemon/nationalReducer';
import user from '../redux/users/userReducers';
import apiCallsInProgress from '../redux/apiStatus/apiStatusReducer';

export const reducer = combineReducers({
  pokemon,
  national,
  apiCallsInProgress,
  user,
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
