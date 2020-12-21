import {DashboardRepository} from "../Repositories/DashboardRepository";

export class SearchService {

  private _dashboardRepository: DashboardRepository

  constructor(dashboardRepository: DashboardRepository) {
    this._dashboardRepository = dashboardRepository
  }

  async search(text: string) {
    return this._dashboardRepository.search(text)
  }
}
