import { CommonModule } from './../common/common.module';
import { Module } from '@nestjs/common';
import { ClientModule } from 'src/client/client.module'

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
    ClientModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
