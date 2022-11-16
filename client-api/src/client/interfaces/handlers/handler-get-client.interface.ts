export interface IHandlerGet {
  index(query: any): Promise<any>
  findById(id: any): Promise<any>
}