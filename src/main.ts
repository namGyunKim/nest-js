// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createSwaggerConfig } from './global/config/swagger.config';
import { HttpExceptionFilter } from './global/error/exception-filter';
import { LoggingInterceptor } from './global/interceptor/log.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger 설정 가져오기
  const document = createSwaggerConfig(app);
  SwaggerModule.setup('/api', app, document);

  // 예외 필터
  app.useGlobalFilters(new HttpExceptionFilter());
  //   로그 인터셉터

  app.useGlobalInterceptors(new LoggingInterceptor());

  await app.listen(3000);
}

bootstrap();
