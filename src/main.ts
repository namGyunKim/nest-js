// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createSwaggerConfig } from './global/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger 설정 가져오기
  const document = createSwaggerConfig(app);
  SwaggerModule.setup('/api', app, document);

  await app.listen(3000);
}

bootstrap();
