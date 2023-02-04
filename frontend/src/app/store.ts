import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { combineReducers } from '@reduxjs/toolkit';
import pokemon from '../redux/pokemon/pokemonReducer';
import user from '../redux/users/userReducers';
import dex from '../redux/pokemon/dexReducers';
import moves from '../redux/pokemon/movesReducer';
import searchResults from '../redux/pokemon/searchResults/searchResultsReducer';
import apiCallsInProgress from '../redux/apiStatus/apiStatusReducer';

export const reducer = combineReducers({
  user,
  pokemon,
  dex,
  moves,
  searchResults,
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