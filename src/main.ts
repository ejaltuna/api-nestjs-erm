import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true    //esto es para que valide el no tomar en cuenta si pasa un campo que no es
  }));
  await app.listen(3000);
}
bootstrap();
