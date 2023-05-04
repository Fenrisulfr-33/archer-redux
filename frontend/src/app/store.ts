import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { combineReducers } from '@reduxjs/toolkit';
import pokemon from '../redux/pokemon/pokemon/pokemonReducer';
import user from '../redux/users/userReducers';
import moves from '../redux/pokemon/moves/movesReducer';
import abilities from '../redux/pokemon/abilities/abilitiesReducer';
import searchResults from '../redux/pokemon/searchResults/searchResultsReducer';
import dexes from '../redux/pokemon/dexes/dexReducer';
import apiCallsInProgress from '../redux/apiStatus/apiStatusReducer';

export const reducer = combineReducers({
  user,
  pokemon,
  moves,
  abilities,
  searchResults,
  dexes,
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