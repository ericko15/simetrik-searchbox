import {SearchService} from "../../DataAccess/Services/SearchService";

export class SearchUseCase {

  private readonly _searchService: SearchService

  constructor(searchService: SearchService) {
    this._searchService = searchService
  }

  async execute(searchText: string) {
    const result = await this._searchService.search(searchText)
    return result
  }

}
