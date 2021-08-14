import { createSlice } from '@reduxjs/toolkit'
import type { Todo } from 'app/todo'

import { fetchAllTodos } from './thunk'

type State = Readonly<{
  todos: Todo[] | null
  error: boolean
}>

export const initialState: State = {
  todos: null,
  error: false
}

export const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
      state.todos = action.payload.todos
      state.error = false
    })
    builder.addCase(fetchAllTodos.rejected, state => {
      state.error = true
    })
  }
})
