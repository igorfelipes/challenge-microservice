import { Module } from '@nestjs/common';
import { ClientController } from 'src/client/handlers/client.controller'
import { AbstractClientService } from 'src/client/services/abstract-client.service'
import { StorageLocalService } from 'src/client/repositories/storage-local/storage-local.service'
import { AbstractRepository } from 'src/client/repositories/abstract-repository.service'
import { ClientService } from 'src/client/services/client.service'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [ConfigModule],
    controllers: [
        ClientController
    ],
    providers: [
        {
            provide: AbstractClientService,
            useClass: ClientService,
        },
        {
            provide: AbstractRepository,
            useClass: StorageLocalService,
        }
    ],
})
export class ClientModule {}
