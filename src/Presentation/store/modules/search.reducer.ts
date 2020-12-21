import {Reducer} from "redux";
import {ISearchState} from "./types/interfaces";
import {CHANGE_LOADING, CHANGE_RESULT} from "./types/constants";

const INITIAL_STATE: ISearchState = {
  loading: false,
  result: []
}

export const search: Reducer<ISearchState, any> = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case CHANGE_LOADING:
      return {...state, loading: payload}
    case CHANGE_RESULT:
      return {...state, result: payload}
    default :
      return state
  }
}
