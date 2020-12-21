export class Json {

  static async get(fileName: string) {
    const response = await fetch(fileName)
    return await response.json()
  }

}
