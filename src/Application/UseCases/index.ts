import {SearchUseCase} from "./SearchUseCase";
import {SearchService} from "../../DataAccess/Services/SearchService";

const searchService = new SearchService()

export const searchUseCase = new SearchUseCase(searchService)

export default {
  searchUseCase
}
