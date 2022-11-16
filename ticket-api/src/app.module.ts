import { TicketController } from './ticket/controllers/ticket.controller';
import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module'
import { TicketModule } from 'src/ticket/ticket.module'

@Module({
  imports: [
    CommonModule.register({
      configModule: {
        ignoreEnvFile: ['production', 'staging'].includes(process.env.NODE_ENV),
        envFilePath: '.env',
        expandVariables: ['development', 'test'].includes(process.env.NODE_ENV),
        cache: ['production', 'staging'].includes(process.env.NODE_ENV),
        isGlobal: true
      }
    }),
    TicketModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
