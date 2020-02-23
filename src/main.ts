import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const options = new DocumentBuilder()
  .setTitle('个人后台项目接口文档')
  .setDescription('这是一个Nest.js写的项目接口文档。主要作为admin后台项目使用')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);
  await app.listen(3001);
  console.log('http://localhost:3001');
}
bootstrap();
