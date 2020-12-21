import {searchUseCase} from "../../../Application/UseCases"
import {CHANGE_LOADING} from "./types/constants"

const changeLoading = (value: boolean) => ({type: CHANGE_LOADING, payload: value})

export const search = (searchText: string) => async (dispatch: any) => {
  dispatch(changeLoading(true))
  const result = await searchUseCase.execute(searchText)
  dispatch(changeLoading(true))
}
