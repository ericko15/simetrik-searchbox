import {combineReducers} from "redux"
import {search} from "./modules/search.reducer"

const rootReducer = combineReducers({
  search
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
