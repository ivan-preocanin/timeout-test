import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping-a')
  async pingServiceA() {
    await new Promise(res => {
      setTimeout(res, 30 * 1000);
    });

    return this.appService.pingServiceA();
  }
}
