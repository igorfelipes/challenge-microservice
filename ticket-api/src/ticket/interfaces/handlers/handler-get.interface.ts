export interface IHandlerGet {
  index(query: any): Promise<any>
  findById(query: any): Promise<any>
}