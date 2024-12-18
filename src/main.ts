import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors : true
  });
  app.setGlobalPrefix('api/v1')
  // app.enableCors()
  await app.listen(process.env.PORT ?? 3001);

}
bootstrap();
