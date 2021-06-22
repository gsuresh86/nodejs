import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'views'));
  app.enableCors({
    origin: 'http://localhost:300',
  });
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
