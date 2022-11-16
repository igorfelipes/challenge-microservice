import { IsEmail, IsString, IsUUID } from "class-validator"
import { ApiProperty } from '@nestjs/swagger'
import { IClient } from "../client.interface"

export class ClientDto implements IClient {

  @IsString()
  @IsUUID()
  id: string

  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsEmail()
  email: string
}