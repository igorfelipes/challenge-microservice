import { Ticket } from 'src/ticket/interfaces/types/ticket'

export interface ITicketService {
  store(data: Ticket): Promise<any>
  getTicket(query?: Ticket): Promise<any>
}