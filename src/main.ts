import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const env = process.env.NODE_ENV;
  const isDevelopment = () => {
    return env === 'development';
  };

  const app = await NestFactory.create(AppModule);

  /**
   * Configs
   */
  // app.setGlobalPrefix('api');
  if (isDevelopment()) {
    app.enableCors();
  }

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT, () => {
    console.log('App listening on PORT:', PORT);
    console.log('Environment:', env);
  });
}
bootstrap();
