export interface IPersist {
  save(data: any): Promise<any>
  update(data: any): Promise<any>
  delete(data: any): Promise<any>
}
