import { Injectable } from '@nestjs/common';

import { ITicket } from 'src/ticket/interfaces/ticket.interface'
import { Ticket } from 'src/ticket/interfaces/types/ticket'
import { AbstractRepository } from 'src/ticket/repositories/abstract-repository.service'
import { v4 as uuid } from 'uuid'

@Injectable()
export class StorageLocalService extends AbstractRepository<Ticket> {

	private storage: Ticket[] = [
		{ id: 'e67b7fe0-ac73-4e63-8134-07be9481d7f1' , eventName: 'Copa do mundo', description: 'copa do mundo 2022', amount: 10},
		{ id: '9a66182f-aa8d-4a65-969d-3ecc5347b75d' , eventName: 'Cansei de ser analista político, agora sou treinador', description: 'pessoas que estão cansadas de discutir política e querem falar de futebol', amount: 12},
		{ id: '9a66182f-aa8d-4a65-969d-3ecc5347b75d' , eventName: 'Terra plana', description: 'evento de terraplanistas', amount: 20},
	]
	constructor(){
		super()
	}
	async findAll(): Promise<Partial<ITicket>[]> {
		return this.storage
	}
	async findOne(query?: Pick<Ticket, 'id'>): Promise<Partial<ITicket>> {
		throw new Error('Method not implemented.')
	}
	async findById(id: string): Promise<Partial<ITicket>> {
		return this.storage.find(ticket => ticket.id = id)
	}
	async find(query?: Partial<Partial<ITicket>>): Promise<Partial<ITicket>[]> {
		throw new Error('Method not implemented.')
	}
	async save(data: ITicket): Promise<ITicket> {
		const client: ITicket = {
			id: uuid(),
			...data
		}
		this.storage.push(client)
		return client
	}
	async update(data: Partial<ITicket>): Promise<Partial<ITicket>> {
		throw new Error('Method not implemented.')
	}
	async delete(data: number): Promise<any> {
		throw new Error('Method not implemented.')
	}
}
