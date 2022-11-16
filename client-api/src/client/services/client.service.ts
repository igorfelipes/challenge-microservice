import { IClient } from '@app/client/interfaces/client.interface'
import { Client } from '@app/client/interfaces/types/client'
import { AbstractRepository } from '@app/client/repositories/abstract-repository.service'
import { AbstractClientService } from '@app/client/services/abstract-client.service'
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService extends AbstractClientService{

	constructor( private readonly repository: AbstractRepository<Client>){
		super()
	}

	async store(data: IClient): Promise<Client> {
		return await this.repository.save(data)
	}
	async getClient(id: Pick<IClient, 'id'>): Promise<any> {
		return await this.repository.findById(id)
	}
	async getAll(): Promise<any[]> {
		return this.repository.findAll()
	}
}
