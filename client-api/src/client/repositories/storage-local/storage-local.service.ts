import { Injectable } from '@nestjs/common';
import { IClient } from 'src/client/interfaces/client.interface'
import { Client } from 'src/client/interfaces/types/client'
import { AbstractRepository } from 'src/client/repositories/abstract-repository.service'
import { v4 as uuid } from 'uuid'

@Injectable()
export class StorageLocalService extends AbstractRepository<Client> {

	private storage: Client[] = [
		{ id: 'e67b7fe0-ac73-4e63-8134-07be9481d7f1' ,name: 'Igor Sales', email: 'igorsales.fs@gmail.com'},
		{ id: '9a66182f-aa8d-4a65-969d-3ecc5347b75d' ,name: 'Matheus Pinheiro', email: 'matheus@gmail.com'},
		{ id: '9a66182f-aa8d-4a65-969d-3ecc5347b75d' ,name: 'Yanni Barreto', email: 'yanni@gmail.com.br'},
	]
	constructor(){
		super()
	}
	async findAll(): Promise<Partial<IClient>[]> {
		return this.storage
	}
	async findOne(query?: Pick<Client, 'id'>): Promise<Partial<IClient>> {
		throw new Error('Method not implemented.')
	}
	async findById(id: string): Promise<Partial<IClient>> {
		return this.storage.find(client => client.id = id)
	}
	async find(query?: Partial<Partial<IClient>>): Promise<Partial<IClient>[]> {
		throw new Error('Method not implemented.')
	}
	async save(data: IClient): Promise<IClient> {
		const client: IClient = {
			id: uuid(),
			...data
		}
		this.storage.push(client)
		return client
	}
	async update(data: Partial<IClient>): Promise<Partial<IClient>> {
		throw new Error('Method not implemented.')
	}
	async delete(data: number): Promise<any> {
		throw new Error('Method not implemented.')
	}
}
