import { IClientService } from 'src/client/interfaces/client-service.interface'
import { IClient } from 'src/client/interfaces/client.interface'

export abstract class AbstractClientService implements IClientService {
	abstract store(data: Partial<IClient>): Promise<any> 
	abstract getClient(id: any): Promise<any> 
	abstract getAll(): Promise<any[]>
}