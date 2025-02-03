import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/env')
  getEnv() {
    const DATABASE_URL = process.env.DATABASE_URL;

    return { DATABASE_URL };
  }
}
