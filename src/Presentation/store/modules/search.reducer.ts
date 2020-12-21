import {Reducer} from "redux";
import {ISearchState} from "./types/interfaces";

const INITIAL_STATE: ISearchState = {
  loading: false,
  result: []
}

export const search: Reducer<ISearchState, any> = (state = INITIAL_STATE, payload) => {
  return state
}
