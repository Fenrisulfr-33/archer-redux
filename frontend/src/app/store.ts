import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import counter from '../redux/counter/counterReducer';
import pokemon from '../redux/pokemon/pokemonReducer';

export const reducer = combineReducers({
  counter,
  pokemon,
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
