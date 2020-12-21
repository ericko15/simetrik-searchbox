import {useSelector as useReduxSelector, TypedUseSelectorHook} from 'react-redux'
import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'
import {RootState} from "./reducers";
import {ISearchState} from "./modules/types/interfaces";

export interface State {
  search: ISearchState
}

export type AppThunkAction<A extends Action> = ThunkAction<void, State, void, A>

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
