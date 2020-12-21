import {Json} from "../../Interfaces/Json";
import {Dashboard} from "../Models/Dashboard";
import {Model} from "../Models/Model";
import {Source} from "../Models/Source";
import {Conciliation} from "../Models/Conciliation";
import {User} from "../Models/User";

export class SearchService {

  private async getData<T extends Model>(url: string, createModel: Function): Promise<T[]> {
    const data: any[] = await Json.get(url)
    return [...data].map(value => createModel({...value, id: value._id}))
  }

  private async searchByModel<T extends Model>(text: string, url: string, createModel: Function): Promise<T[]> {
    const dashboards: any[] = await this.getData<T>(url, createModel)
    return [...dashboards].filter((item: T) => item.searchStringOnProps(text))
  }

  async search(text: string) {
    const dashboardCreate = Dashboard.create
    const sourceCreate = Source.create
    const conciliationCreate = Conciliation.create
    const userCreate = User.create
    const dashboardResult = await this.searchByModel<Dashboard>(text, '/data/tableros.json', dashboardCreate)
    const sourceResult = await this.searchByModel<Source>(text, '/data/fuentes.json', sourceCreate)
    const conciliationResult = await this.searchByModel<Conciliation>(text, '/data/conciliaciones.json', conciliationCreate)
    const userResult = await this.searchByModel<User>(text, '/data/usuarios.json', userCreate)
    return [...dashboardResult, ...sourceResult, ...conciliationResult, ...userResult]
  }
}
