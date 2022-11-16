import { Client } from 'src/client/interfaces/types/client'

export interface IClientService {
  store(data: Client): Promise<any>
  getClient(query?: Client): Promise<any>
}