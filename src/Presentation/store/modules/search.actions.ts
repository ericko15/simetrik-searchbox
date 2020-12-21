import {searchUseCase} from "../../../Application/UseCases"
import {CHANGE_LOADING, CHANGE_RESULT} from "./types/constants"

const changeLoading = (value: boolean) => ({type: CHANGE_LOADING, payload: value})

const changeResult = (value: any[]) => ({type: CHANGE_RESULT, payload: value})

export const search = (searchText: string) => async (dispatch: any) => {
  dispatch(changeLoading(true))
  const result = await searchUseCase.execute(searchText)
  dispatch(changeResult(result))
  dispatch(changeLoading(true))
}
