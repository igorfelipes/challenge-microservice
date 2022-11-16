
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { TicketDto } from 'src/ticket/interfaces/dtos/ticket'
import { IHandlerGet } from 'src/ticket/interfaces/handlers/handler-get.interface'
import { IHandlerPost } from 'src/ticket/interfaces/handlers/handler-post.interface'
import { AbstractTicketService } from 'src/ticket/services/abstract-ticket.service'

@ApiTags('Ticket')
@Controller('ticket')
export class TicketController implements IHandlerGet, IHandlerPost{
	constructor(private readonly service: AbstractTicketService){
	}

	@ApiOperation({ summary: 'Get all tickets' })
  @ApiResponse({
    status: 200
  })
	@Get('')
	async index(): Promise<any[]> {
		return await this.service.getAll()
	}

	@ApiOperation({ summary: 'Get a ticket' })
  @ApiResponse({
    status: 200
  })
	@Get(':id')
	async findById(@Param('id') id: string	): Promise<any> {
		return await this.service.getTicket(id)
	}

	@ApiOperation({ summary: 'Store a ticket' })
  @ApiResponse({
    status: 200
  })
	@Post()
	async create(@Body() data: TicketDto): Promise<any> {
		return await this.service.store(data)
	}
}
