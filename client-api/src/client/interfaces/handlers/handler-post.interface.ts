import { Client } from 'src/client/interfaces/types/client'

export interface IHandlerPost {
  create(data: Client): Promise<any>
}