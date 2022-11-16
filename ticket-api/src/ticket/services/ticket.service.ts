
import { Injectable } from '@nestjs/common';
import { ITicket } from 'src/ticket/interfaces/ticket.interface'
import { Ticket } from 'src/ticket/interfaces/types/ticket'
import { AbstractRepository } from 'src/ticket/repositories/abstract-repository.service'
import { AbstractTicketService } from 'src/ticket/services/abstract-ticket.service'

@Injectable()
export class TicketService extends AbstractTicketService{

	constructor( private readonly repository: AbstractRepository<Ticket>){
		super()
	}

	async store(data: ITicket): Promise<Ticket> {
		return await this.repository.save(data)
	}
	async getTicket(id: Pick<ITicket, 'id'>): Promise<any> {
		return await this.repository.findById(id)
	}
	async getAll(): Promise<any[]> {
		return this.repository.findAll()
	}
}
