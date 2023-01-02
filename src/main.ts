import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap(): Promise<void> {
    const logger = new Logger('Main');
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    app.use(helmet());

    const PORT = process.env.APP_PORT;
    await app.listen(PORT);
    logger.log('SAMPLE API MANAGER IS LISTENING TO PORT: ' + PORT);
}
bootstrap();
