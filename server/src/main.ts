import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as process from "process";
import {discordBot} from "../bot";
import {config} from "dotenv";

async function bootstrap() {
  config()

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 5000);
}

bootstrap();
discordBot()
