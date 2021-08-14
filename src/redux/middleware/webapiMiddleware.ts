import { Middleware, MiddlewareAPI, Dispatch } from 'redux'

export const webapiMiddleware: Middleware =
  ({ getState }: MiddlewareAPI) =>
  (next: Dispatch) =>
  action => {
    if (action?.type === 'webapi/middleware') {
      console.log('action.meta', action?.meta)
    }
    return next(action)
  }
