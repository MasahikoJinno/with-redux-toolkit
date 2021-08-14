import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Todo } from 'app/todo'

export const fetchAllTodos = createAsyncThunk<{ todos: Todo[] }>(
  'todos/fetchAllTodos',
  async (_arg, { dispatch }) => {
    try {
      const r = await fetch('/api/todos')
      dispatch({ type: 'webapi/middleware', meta: { status: r.status } })
      return { todos: await r.json() }
    } catch (e) {
      console.log(e)
      throw new Error('fetch error:')
    }
  }
)
