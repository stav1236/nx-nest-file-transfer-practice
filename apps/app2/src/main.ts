/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { json, urlencoded } from 'express';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Increase request size limits
  app.use(json({ limit: '50mb' })); // Adjust limit as needed
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS File Upload API')
    .setDescription('API to upload base64 file')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
