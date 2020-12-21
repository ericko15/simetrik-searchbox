import {applyMiddleware, createStore, AnyAction} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'
import ThunkMiddleware from 'redux-thunk'
import {State} from "./types";

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') return composeWithDevTools(applyMiddleware(...middleware))
  return applyMiddleware(...middleware)
}

const middleware = [ThunkMiddleware]

const enhancer: any = bindMiddleware(middleware)

export const store = createStore<State, AnyAction, null, null>(reducers, enhancer)
