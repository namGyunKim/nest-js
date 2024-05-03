// src/global/config/SwaggerConfig.ts
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function createSwaggerConfig(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('The example API description')
    .setVersion('1.0')
    .addTag('example')
    .build();

  return SwaggerModule.createDocument(app, options); // 올바른 메소드 사용
}
