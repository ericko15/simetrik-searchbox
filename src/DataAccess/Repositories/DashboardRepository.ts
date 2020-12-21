import {Json} from "../../Interfaces/Json";

export class DashboardRepository {

  private readonly _url = '/data/tableros.json'

  async search(text: string) {
    const data = await Json.get(this._url)
    return data
  }

}
