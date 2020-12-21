import {SearchUseCase} from "./SearchUseCase";
import {SearchService} from "../../DataAccess/Services/SearchService";
import {DashboardRepository} from "../../DataAccess/Repositories/DashboardRepository";

const dashboardRepository = new DashboardRepository()
const searchService = new SearchService(dashboardRepository)

export const searchUseCase = new SearchUseCase(searchService)

export default {
  searchUseCase
}
