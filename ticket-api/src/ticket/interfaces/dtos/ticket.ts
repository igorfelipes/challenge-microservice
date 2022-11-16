import { IsString, IsUUID, IsNumber } from "class-validator"
import { ApiProperty } from '@nestjs/swagger'
import { ITicket } from "../ticket.interface"

export class TicketDto implements ITicket {

  @IsString()
  @IsUUID()
  id: string

  @ApiProperty()
  @IsString()
  eventName: string

  @ApiProperty()
  @IsString()
  description: string

  @ApiProperty()
  @IsNumber()
  amount: number

}