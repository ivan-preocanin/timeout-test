import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    // return of('pong').pipe(delay(20 * 1000));
    return of('pong').pipe();
  }
}
