import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module';
import helmet from 'helmet'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService)
  const config = new DocumentBuilder()
    .setTitle(configService.get<string>('app.name'))
    .setDescription(configService.get<string>('app.description'))
    .setVersion(configService.get<string>('app.version'))
    .build()
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => `${controllerKey}.${methodKey}`
  }
  const document = SwaggerModule.createDocument(app, config, options)
  SwaggerModule.setup('docs', app, document)
  app.use(helmet())
  app.enableCors()
  app.enableShutdownHooks()
  await app.listen(configService.get<number>('app.port') ?? 3000)
}

bootstrap()
  .then(() => true)
  .catch((err) => console.error(err))
