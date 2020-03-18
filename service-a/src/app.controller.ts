import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'ping' })
  async ping(_: any) {
    await new Promise(res => {
      setTimeout(res, 30 * 1000);
    });
    return of('pong').pipe();
  }
}
