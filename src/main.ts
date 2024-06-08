import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';

async function bootstrap() {
  const app = await NestFactory.create(CustomersModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
