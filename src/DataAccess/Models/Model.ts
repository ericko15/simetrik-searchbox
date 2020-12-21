export abstract class Model {
  searchStringOnProps(text: string): boolean {
    return !!Object.values(this).find((value: any) => {
      if (typeof value === 'string') return value.toLocaleLowerCase().includes(text.toLowerCase())
      if (value instanceof Array) {
        return !!value.find((string: any) => {
          if (typeof string === 'string') return string.includes(text)
        })
      }
      return false
    })
  }
}
