import { ITicketService } from 'src/ticket/interfaces/ticket-service.interface'
import { ITicket } from 'src/ticket/interfaces/ticket.interface'

export abstract class AbstractTicketService implements ITicketService {
	abstract store(data: Partial<ITicket>): Promise<any> 
	abstract getTicket(id: any): Promise<any> 
	abstract getAll(): Promise<any[]>
}