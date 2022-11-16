import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TicketController } from 'src/ticket/controllers/ticket.controller'
import { AbstractRepository } from 'src/ticket/repositories/abstract-repository.service'
import { StorageLocalService } from 'src/ticket/repositories/storage-local/storage-local.service'
import { AbstractTicketService } from 'src/ticket/services/abstract-ticket.service'
import { TicketService } from 'src/ticket/services/ticket.service'

@Module({
    imports: [ConfigModule],
    controllers: [
        TicketController
    ],
    providers: [
        {
            provide: AbstractTicketService,
            useClass: TicketService,
        },
        {
            provide: AbstractRepository,
            useClass: StorageLocalService,
        }
    ],
})
export class TicketModule {}
