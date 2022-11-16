import { ClientDto } from '@app/client/interfaces/dtos/client.dto'
import { IHandlerGet } from '@app/client/interfaces/handlers/handler-get-client.interface'
import { IHandlerPost } from '@app/client/interfaces/handlers/handler-post.interface'
import { Client } from '@app/client/interfaces/types/client'
import { AbstractClientService } from '@app/client/services/abstract-client.service'
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Client')
@Controller('client')
export class ClientController implements IHandlerGet, IHandlerPost{
	constructor(private readonly clientService: AbstractClientService){
	}

	@ApiOperation({ summary: 'Get all clients' })
  @ApiResponse({
    status: 200
  })
	@Get('')
	async index(): Promise<Client[]> {
		return await this.clientService.getAll()
	}

	@ApiOperation({ summary: 'Get a client' })
  @ApiResponse({
    status: 200
  })
	@Get(':id')
	async findById(@Param('id') id: string	): Promise<Client> {
		return await this.clientService.getClient(id)
	}

	@ApiOperation({ summary: 'Store a client' })
  @ApiResponse({
    status: 200
  })
	@Post()
	async create(@Body() data: ClientDto): Promise<Client> {
		return await this.clientService.store(data)
	}
}
