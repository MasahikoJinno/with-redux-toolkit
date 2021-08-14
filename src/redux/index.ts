import { configureStore, EnhancedStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers, Action } from 'redux'
import { ThunkAction as ReduxThunkAction } from 'redux-thunk'
import logger from 'redux-logger'

import { webapiMiddleware } from './middleware'
import { todo } from './modules'

const reducer = combineReducers({
  todo: todo.reducer
})

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger, webapiMiddleware],
  devTools: process.env.NEXT_APP_ENV !== 'production'
})

export type RootState = ReturnType<typeof reducer>
export type ThunkAction<R> = ReduxThunkAction<R, RootState, undefined, Action<string>>
export type Store = EnhancedStore<RootState>
