import { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { appConfig } from 'src/common/configs/app.config'
import { CommonModuleOptions } from 'src/common/interfaces/common-module-options.interface'


@Module({})
export class CommonModule {
    static register(options: CommonModuleOptions): DynamicModule {
       
        return {
            module: CommonModule,
            imports: [
                ConfigModule.forRoot({...options.configModule}),
                ConfigModule.forFeature(appConfig()),
            ],
        }
    }
}