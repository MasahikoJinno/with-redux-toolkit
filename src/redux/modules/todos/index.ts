import { slice, initialState } from './slice'
import { fetchAllTodos } from './thunk'

export const reducer = slice.reducer
export const actions = {
  ...slice.actions,
  fetchAllTodos
}
export * as selectors from './selectors'

export const __tests__ = {
  initialState
}
