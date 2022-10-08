import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = configService.getPort();
  await app.listen(port, () =>
    console.log(`Server started at http://localhost:${port}`),
  );
}
bootstrap();